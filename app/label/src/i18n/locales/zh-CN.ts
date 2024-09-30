const lng: I18nSchema = {
  meta: {
    name: 'zh-CN',
    description: '中文',
  },
  welcome: '欢迎使用: {{env}}-v{{version}}',
  selectCommand: '请选择命令',
  envUndefined: '环境变量 {{env}} 未定义',
  cancel: '取消操作',
  command: {
    batchDeleteLabel: {
      name: '批量删除标签',
      selectAllError: '获取标签失败',
      nothingDeleted: '没有可以删除的标签',
      selectLabelMessage: '请选择需要删除的标签',
      noLabelSelected: '未选择任何标签',
      confirmDeleteMessage: '已选择[{{length}}]个标签, 是否开始删除?',
      startDeleting: '开始删除标签',
      deleteSuccess: '删除标签[{{name}}]成功',
      deleteFailure: '删除标签[{{name}}]失败',
      deleteFinish: '删除标签完成',
    },
    createCommonLabel: {
      name: '创建普通标签',
      inputLabelName: '请输入标签名称',
      inputEmptyError: '标签名称不能为空',
      labelExistsOverwriteConfirm: '标签[{{name}}]已存在, 是否覆盖?',
      inputLabelDescription: '请输入标签描述',
      inputLabelColor: '请输入标签颜色(6位-16进制)',
      inputColorError: '标签颜色格式错误',
      confirmCreateLabel: '标签名称:[{{name}}], 描述:[{{description}}], 颜色:[{{color}}], 是否开始创建?',
      update: '更新',
      create: '创建',
      success: '[{{name}}]成功',
      failure: '[{{name}}]失败',
    },
    createFuncLabel: {
      name: '创建功能标签',
      selectLabelMessage: '请选择需要创建的功能标签',
      noLabelSelected: '未选择任何标签',
      confirmCreateMessage: '已选择[{{length}}]个标签, 是否开始创建?',
      startCreate: '开始创建标签',
      createSuccess: '创建标签[{{name}}]成功',
      createFailure: '创建标签[{{name}}]失败',
      createFinish: '创建标签完成',
    },
    listAllLabels: {
      name: '查看全部标签',
      selectError: '获取标签失败',
      labelList: '标签列表',
    },
  },
  labelGroup: {
    func: {
      name: '功能标签',
      labels: {
        article: {
          name: '文章',
          description: '文章功能标签',
        },
        message: {
          name: '留言',
          description: '留言功能标签',
        },
        link: {
          name: '友链',
          description: '友链功能标签',
        },
        history: {
          name: '历史',
          description: '历史功能标签',
        },
        album: {
          name: '相册',
          description: '相册功能标签',
        },
        about: {
          name: '关于',
          description: '关于功能标签',
        },
        banner: {
          name: '轮播图',
          description: '轮播图功能标签',
        },
      },
    },
    historyExtra: {
      name: '历史扩展标签',
      labels: {
        warn: {
          name: '历史:警告',
          description: '历史功能标签:警告',
        },
        success: {
          name: '历史:成功',
          description: '历史功能标签:成功',
        },
        info: {
          name: '历史:信息',
          description: '历史功能标签:信息',
        },
        error: {
          name: '历史:错误',
          description: '历史功能标签:错误',
        },
        default: {
          name: '历史:默认',
          description: '历史功能标签:默认',
        },
      },
    },
    util: {
      name: '辅助标签',
      labels: {
        hiddenComment: {
          name: '隐藏评论',
          description: '隐藏评论功能标签',
        },
      },
    },
  },
  api: {
    error: {
      network: '网络连接异常，请检查网络连接或稍后再试',
      unauthorized: '未授权，请检查您的 GitHub Token 是否正确',
      rateLimit: 'API 调用频率过高，请稍后再试',
      forbidden: '权限不足，请检查您的 GitHub Token 是否正确',
      invalidParams: '请求参数无效，请检查您的输入是否正确',
    },
  },
}

export default lng
