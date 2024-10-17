export interface FuncLabels {
  message: string
  link: string
  about: string
  article: string
  hiddenComment: string
  banner: string
  history: string
  album: string
  pin: string
}

export const funcLabelPrefix = 'func:'

export const funcLabelsDefault: FuncLabels = {
  message: `${funcLabelPrefix}message`,
  link: `${funcLabelPrefix}link`,
  about: `${funcLabelPrefix}about`,
  article: `${funcLabelPrefix}article`,
  hiddenComment: `${funcLabelPrefix}hidden-comment`,
  banner: `${funcLabelPrefix}banner`,
  history: `${funcLabelPrefix}history`,
  album: `${funcLabelPrefix}album`,
  pin: `${funcLabelPrefix}pin`,
}
