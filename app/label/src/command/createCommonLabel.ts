import { confirm, input } from '@inquirer/prompts'
import awaitTo from 'await-to-js'
import labelApi from '~/api/module/label'
import i18n from '~/i18n'

export default async () => {
  const [nErr, name] = await awaitTo(input({
    message: i18n.t('label:command.createCommonLabel.inputLabelName'),
    validate: (value) => {
      if (!value) {
        return i18n.t('label:command.createCommonLabel.inputEmptyError')
      }
      return true
    },
  }))
  if (nErr) {
    console.error(i18n.t('label:cancel'))
    return
  }

  const [hErr, labels] = await awaitTo(labelApi.get(name))
  const someLabel = !hErr && labels
  if (someLabel) {
    const [sErr, next] = await awaitTo(confirm({
      message: i18n.t('label:command.createCommonLabel.labelExistsOverwriteConfirm'),
    }))
    if (sErr || !next) {
      console.error(i18n.t('label:cancel'))
      return
    }
  }

  const [dErr, description] = await awaitTo(input({
    message: i18n.t('label:command.createCommonLabel.inputLabelDescription'),
  }))
  if (dErr) {
    console.error(i18n.t('label:cancel'))
    return
  }

  const [cErr, color] = await awaitTo(input({
    message: i18n.t('label:command.createCommonLabel.inputLabelColor'),
    validate: (value) => {
      if (value && !/^[0-9a-f]{6}$/i.test(value)) {
        return i18n.t('label:command.createCommonLabel.inputColorError')
      }
      return true
    },
  }))
  if (cErr) {
    console.error(i18n.t('label:cancel'))
    return
  }

  const [sErr, next] = await awaitTo(confirm({
    message: i18n.t('label:command.createCommonLabel.confirmCreateLabel', {
      name,
      description,
      color,
    }),
  }))
  if (sErr || !next) {
    console.error(i18n.t('label:cancel'))
    return
  }

  const t = someLabel
    ? i18n.t('label:command.createCommonLabel.update')
    : i18n.t('label:command.createCommonLabel.create')

  const [err, r] = await awaitTo(labelApi[someLabel ? 'update' : 'create']({
    name,
    description: description === '' ? undefined : description,
    color: color === '' ? undefined : color,
  }),
  )
  if (err) {
    console.error(t + i18n.t('label:command.createCommonLabel.failure', {
      name,
    }), err)
    return
  }
  console.log(t + i18n.t('label:command.createCommonLabel.success', {
    name,
  }), r)
}
