import appConfig from '~/app.config'

interface TitleOptions {
  appName: string
}

class Title {
  constructor(public options: TitleOptions) { }
  public setTitle(title?: string) {
    document.title = title
      ? `${title} | ${this.options.appName}`
      : this.options.appName
  }
}

export default new Title({
  appName: appConfig.appName,
})
