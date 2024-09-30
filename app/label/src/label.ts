import { funcLabelsDefault } from '@xiaohuohumax/miaoji-func-label'
import i18n from './i18n'

export interface Label {
  name: string
  labelName: string
  description: string
  color?: string
}

export interface LabelGroup {
  name: string
  labels: Label[]
}

export const labelGroups: LabelGroup[] = [
  {
    name: i18n.t('label:labelGroup.func.name'),
    labels: [
      {
        name: i18n.t('label:labelGroup.func.labels.article.name'),
        labelName: funcLabelsDefault.article,
        description: i18n.t('label:labelGroup.func.labels.article.description'),
      },
      {
        name: i18n.t('label:labelGroup.func.labels.message.name'),
        labelName: funcLabelsDefault.message,
        description: i18n.t('label:labelGroup.func.labels.message.description'),
      },
      {
        name: i18n.t('label:labelGroup.func.labels.link.name'),
        labelName: funcLabelsDefault.link,
        description: i18n.t('label:labelGroup.func.labels.link.description'),
      },
      {
        name: i18n.t('label:labelGroup.func.labels.history.name'),
        labelName: funcLabelsDefault.history,
        description: i18n.t('label:labelGroup.func.labels.history.description'),
      },
      {
        name: i18n.t('label:labelGroup.func.labels.album.name'),
        labelName: funcLabelsDefault.album,
        description: i18n.t('label:labelGroup.func.labels.album.description'),
      },
      {
        name: i18n.t('label:labelGroup.func.labels.about.name'),
        labelName: funcLabelsDefault.about,
        description: i18n.t('label:labelGroup.func.labels.about.description'),
      },
      {
        name: i18n.t('label:labelGroup.func.labels.banner.name'),
        labelName: funcLabelsDefault.banner,
        description: i18n.t('label:labelGroup.func.labels.banner.description'),
      },
    ],
  },
  {
    name: i18n.t('label:labelGroup.historyExtra.name'),
    labels: [
      {
        name: i18n.t('label:labelGroup.historyExtra.labels.warn.name'),
        labelName: `${funcLabelsDefault.history}:warning`,
        description: i18n.t('label:labelGroup.historyExtra.labels.warn.description'),
        color: 'f08a00',
      },
      {
        name: i18n.t('label:labelGroup.historyExtra.labels.success.name'),
        labelName: `${funcLabelsDefault.history}:success`,
        description: i18n.t('label:labelGroup.historyExtra.labels.success.description'),
        color: '2a947d',
      },
      {
        name: i18n.t('label:labelGroup.historyExtra.labels.info.name'),
        labelName: `${funcLabelsDefault.history}:info`,
        description: i18n.t('label:labelGroup.historyExtra.labels.info.description'),
        color: '3889c5',
      },
      {
        name: i18n.t('label:labelGroup.historyExtra.labels.error.name'),
        labelName: `${funcLabelsDefault.history}:error`,
        description: i18n.t('label:labelGroup.historyExtra.labels.error.description'),
        color: 'd03a52',
      },
      {
        name: i18n.t('label:labelGroup.historyExtra.labels.default.name'),
        labelName: `${funcLabelsDefault.history}:default`,
        description: i18n.t('label:labelGroup.historyExtra.labels.default.description'),
        color: '909092',
      },
    ],
  },
  {
    name: i18n.t('label:labelGroup.util.name'),
    labels: [
      {
        name: i18n.t('label:labelGroup.util.labels.hiddenComment.name'),
        labelName: funcLabelsDefault.hiddenComment,
        description: i18n.t('label:labelGroup.util.labels.hiddenComment.description'),
      },
    ],
  },
]
