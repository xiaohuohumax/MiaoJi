import awaitTo from 'await-to-js'
import labelApi from '~/api/module/label'
import i18n from '~/i18n'

export default async () => {
  const [err, labels] = await awaitTo(labelApi.all())
  if (err) {
    console.error(i18n.t('label:command.listAllLabels.selectError'), err)
    return
  }
  console.log(i18n.t('label:command.listAllLabels.labelList'))
  console.table(labels, ['name', 'color', 'description'])
}
