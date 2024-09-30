import type { Label as IssueLabel } from '@xiaohuohumax/miaoji-api'
import { checkbox, confirm } from '@inquirer/prompts'
import awaitTo from 'await-to-js'
import labelApi from '~/api/module/label'
import i18n from '~/i18n'

export default async () => {
  const [err, label] = await awaitTo(labelApi.all())
  if (err) {
    console.error(
      i18n.t('label:command.batchDeleteLabel.selectAllError'),
      err,
    )
  }

  if (label.length === 0) {
    console.warn(i18n.t('label:command.batchDeleteLabel.nothingDeleted'))
    return
  }

  const [cErr, labels] = await awaitTo(checkbox<IssueLabel>({
    message: i18n.t('label:command.batchDeleteLabel.selectLabelMessage'),
    choices: label.map(l => ({
      name: l.name,
      value: l,
    })),
  }))
  if (cErr) {
    console.error(i18n.t('label:cancel'))
    return
  }
  if (labels.length === 0) {
    console.warn(i18n.t('label:command.batchDeleteLabel.noLabelSelected'))
    return
  }
  const [sErr, next] = await awaitTo(confirm({
    message: i18n.t('label:command.batchDeleteLabel.confirmDeleteMessage', {
      length: labels.length,
    }),
  }))
  if (sErr || !next) {
    console.error(i18n.t('label:cancel'))
  }

  console.log(i18n.t('label:command.batchDeleteLabel.startDeleting'))
  for (const l of labels) {
    const [e] = await awaitTo(labelApi.delete(l.name))
    if (e) {
      console.error(
        i18n.t('label:command.batchDeleteLabel.deleteFailure', {
          name: l.name,
        }),
        e,
      )
      continue
    }
    console.log(i18n.t('label:command.batchDeleteLabel.deleteSuccess', {
      name: l.name,
    }))
  }
  console.log(i18n.t('label:command.batchDeleteLabel.deleteFinish'))
}
