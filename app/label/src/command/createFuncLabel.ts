import type { Label as IssueLabel } from '@xiaohuohumax/miaoji-api'
import { checkbox, confirm, Separator } from '@inquirer/prompts'
import awaitTo from 'await-to-js'
import labelApi from '~/api/module/label'
import i18n from '~/i18n'
import type { Label } from '~/label'
import { labelGroups } from '~/label'

type CheckboxChoice<V> = Separator | {
  value: V
  name?: string
  description?: string
  short?: string
  disabled?: boolean | string
  checked?: boolean
  type?: never
}

export default async () => {
  const choices: CheckboxChoice<Label>[] = []

  labelGroups.forEach((group) => {
    choices.push(new Separator(group.name))
    group.labels.forEach((label) => {
      choices.push({
        name: `${label.name} - ${label.description}`,
        value: label,
        checked: true,
      })
    })
  })

  const [err, labels] = await awaitTo(checkbox<Label>({
    message: i18n.t('label:command.createFuncLabel.selectLabelMessage'),
    loop: false,
    choices,
  }))

  if (err) {
    console.error(i18n.t('label:cancel'))
    return
  }
  if (labels.length === 0) {
    console.warn(i18n.t('label:command.createFuncLabel.noLabelSelected'))
    return
  }

  const [nErr, next] = await awaitTo(confirm({
    message: i18n.t('label:command.createFuncLabel.confirmCreateMessage', {
      length: labels.length,
    }),
  }))
  if (nErr || !next) {
    console.error(i18n.t('label:cancel'))
    return
  }

  console.log(i18n.t('label:command.createFuncLabel.startCreate'))
  const labelResults: IssueLabel[] = []
  for (const label of labels) {
    const [e, r] = await awaitTo(labelApi.create({
      name: label.labelName,
      description: label.description,
      color: label.color,
    }))
    if (e) {
      console.error(i18n.t('label:command.createFuncLabel.createFailure', {
        name: label.name,
      }), e)
      continue
    }
    console.log(i18n.t('label:command.createFuncLabel.createSuccess', {
      name: label.name,
    }), r)
    labelResults.push(r)
  }
  console.table(labelResults, ['name', 'color', 'description'])
  console.log(i18n.t('label:command.createFuncLabel.createFinish'))
}
