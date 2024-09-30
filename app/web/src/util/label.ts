import type { Label } from '@xiaohuohumax/miaoji-api'
import appConfig from '~/app.config'

export function isFuncLabel(label: Label): boolean {
  return label.name.startsWith(appConfig.funcLabelPrefix)
}

export function hasFuncLabel(labels: Label[], funcLabel: string): boolean {
  return labels.some(label => label.name === funcLabel)
}

export function excludeFuncLabels(labels: Label[]): Label[] {
  return labels.filter(label => !isFuncLabel(label))
}
