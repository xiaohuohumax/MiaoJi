import { checkbox, confirm, input, select, Separator } from '@inquirer/prompts';
import { Label } from '@miaoji/api';
import awaitTo from 'await-to-js';
import { AxiosError } from 'axios';
import appConfig, { CLabel } from '../app.config';
import { labelApi } from './api';

const allDefaultLabels = appConfig.cLabels.map(l => l.labels).flat(1);

function randomColor() {
    return Math.random().toString(16).substring(2, 8);
}

function handleErr(err: Error): [success: boolean, msg: string] {
    if (err instanceof AxiosError) {
        const { response, code, message } = err;
        if (code == AxiosError.ERR_NETWORK) {
            return [false, '网络异常!'];
        }

        switch (response?.status) {
        case 401:
            return [false, '无权限!'];
        case 422:
            if ((response.data.errors as any[])?.find(e => e.code == 'already_exists')) {
                return [true, '此标签已存在!'];
            }
            return [false, '请求参数异常: ' + JSON.stringify(response.data?.errors[0])];
        case 404:
            return [false, '404 Not Found!'];
        }

        return [false, `其他异常: code: ${code} message: ${message}`];
    }
    return [false, '未知异常!'];
}

/**
 * 创建标签
 * @param label 标签信息
 * @returns [是否成功, 提示消息]
 */
async function createLabel(label: CLabel): Promise<[success: boolean, msg: string]> {
    const color = label.color || randomColor();
    const [err, res] = await awaitTo(labelApi.createLabel({ ...label, color }));

    if (!err) {
        const { name, color, description } = res.data;
        return [true, `创建成功: ${description} 标签(${name}) 颜色(${color})`];
    }

    return handleErr(err);
}

/**
 * 删除标签
 * @param label 标签名称
 * @returns [是否成功, 提示消息]
 */
async function deleteLabel(labelName: string): Promise<[success: boolean, msg: string]> {
    const [err] = await awaitTo(labelApi.deleteLabelByName(labelName));

    if (!err) {
        return [true, `删除成功: ${labelName}`];
    }

    return handleErr(err);
}

/**
 * 查询全部标签
 */
async function queryAllLabels(): Promise<[status: boolean, labels: Label[]]> {
    // 查询全部标签
    const [err, labels] = await awaitTo(labelApi.qAllLabels());
    if (err) {
        console.log('查询全部标签失败: ' + handleErr(err)[1]);
        return [false, undefined];
    }
    console.table(labels, ['name', 'color', 'description']);
    if (labels.length == 0) {
        console.log('仓库没有标签!');
    }
    return [true, labels];
}

/**
 * 创建配置文件标签
 */
async function createDefaultLabels() {
    const labelChoices: any[] = [];

    appConfig.cLabels.forEach(cLabel => {
        // 分割线
        labelChoices.push(new Separator(`[${cLabel.title}]`));
        cLabel.labels.forEach(l => {
            const color = l.color ?? '随机';
            labelChoices.push({
                name: `${l.description} 颜色(${color}) 标签(${l.name})`,
                value: l.name,
                // checked: true
            });
        });
    });

    const [lErr, labelNames] = await awaitTo<string[]>(checkbox({
        message: '请选择需要创建的标签',
        loop: false,
        choices: labelChoices
    }));

    if (lErr) {
        return console.log('已取消!');
    }

    if (labelNames.length == 0) {
        return console.log('未选择标签, 已退出!');
    }

    // 表格显示已选标签
    const labels = allDefaultLabels.filter(l => labelNames.includes(l.name));
    console.table(labels.map(l => ({ ...l, color: l.color ?? '随机' })));

    // 最后确认
    const [nErr, isNext] = await awaitTo(confirm({ message: `已选择[${labelNames.length}]个标签, 是否开始创建?` }));
    if (nErr || !isNext) {
        return console.log('已取消!');
    }

    console.log('\n开始创建:');
    const res = [];
    for (const [index, label] of labels.entries()) {
        console.log(`正在处理[${index + 1}/${labelNames.length}]: ` + label.description);
        const [success, msg] = await createLabel(label);
        res.push({
            label: `${label.description} ${label.name}`,
            msg: msg,
            status: success ? '成功' : '失败'
        });
        if (!success) {
            break;
        }
    }
    // 创建结果
    console.log();
    console.table(res);
}

/**
 * 创建自定义标签
 */
async function createCustomLabels() {
    let label: CLabel;
    try {
        label = {
            name: await input({
                message: '[1/3]请输入标签名称:',
                validate: (name) => name.trim() == '' ? '名称不能为空' : true
            }),
            description: await input({ message: '[2/3]请输入标签描述:' }),
            color: await input({ message: '[3/3]请输入标签颜色(16进制, 空则随机, 例如: ffffff):' })
        };
    } catch (error) {
        return console.log('已取消!');
    }
    const [next, msg] = await createLabel(label);
    console.table([{
        label: `${label.description} ${label.name}`,
        msg: msg,
        status: next ? '成功' : '失败'
    }]);
}

/**
 * 批量删除标签
 */
async function deleteLabels() {
    // 查询全部标签
    const [status, labels] = await queryAllLabels();
    if (!status || labels.length == 0) {
        return;
    }

    const labelChoices: any[] = labels.map(l => ({
        name: `${l.description} 颜色(${l.color}) 标签(${l.name})`,
        value: l.name,
    }));

    const [lErr, labelNames] = await awaitTo<string[]>(checkbox({
        message: '请选择需要删除的标签',
        loop: false,
        choices: labelChoices
    }));

    if (lErr) {
        return console.log('已取消!');
    }

    if (labelNames.length == 0) {
        return console.log('未选择标签, 已退出!');
    }

    const deleteLabels = labels.filter(l => labelNames.includes(l.name));
    console.table(deleteLabels, ['name', 'color', 'description']);

    // 最后确认
    const [nErr, isNext] = await awaitTo(confirm({ message: `已选择[${labelNames.length}]个标签, 是否全部删除?` }));
    if (nErr || !isNext) {
        return console.log('已取消!');
    }

    console.log('\n开始删除:');
    const res = [];
    for (const [index, label] of deleteLabels.entries()) {
        console.log(`正在删除${index + 1}/${deleteLabels.length}]: ` + label.name);
        const [success, msg] = await deleteLabel(label.name);
        res.push({
            label: `${label.description} ${label.name}`,
            msg: msg,
            status: success ? '成功' : '失败'
        });
        if (!success) {
            break;
        }
    }
    // 删除结果
    console.log();
    console.table(res);
}


interface Command {
    title: string,
    value: string,
    doFunc: () => Promise<any>
}

const commands: Command[] = [
    {
        title: '查询标签',
        value: 'query_all_labels',
        doFunc: queryAllLabels
    },
    {
        title: '创建标签[默认]',
        value: 'create_default_labels',
        doFunc: createDefaultLabels
    },
    {
        title: '创建标签[自定义]',
        value: 'create_custom_labels',
        doFunc: createCustomLabels
    },
    {
        title: '删除标签',
        value: 'delete_labels',
        doFunc: deleteLabels
    },
];

(async () => {
    console.log(`欢迎使用 ${appConfig.name} 标签辅助工具`);
    console.log('此工具用于快速创建 Issue 标签\n');

    const { repo, owner, accessToken } = appConfig.api;

    const info = [
        {
            name: '仓库地址',
            value: repo
        },
        {
            name: '仓库持有者',
            value: owner
        },
        {
            name: 'Github Token',
            value: accessToken ? accessToken.substring(0, 10) + '...' : '无'
        }
    ];
    console.table(info);
    console.log();

    // 检查 Token 是否存在
    if (!appConfig.api.accessToken) {
        return console.log('未填写 Github Token!');
    }

    const [err, sRes] = await awaitTo(select({
        message: '请选择工具',
        choices: commands.map(c => ({
            name: c.title,
            value: c.value
        }))
    }));
    if (err) {
        return console.log('已取消!');
    }
    // 执行
    commands.find(c => c.value == sRes)?.doFunc();
})();
