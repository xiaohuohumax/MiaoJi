## MiaoJi

[中文](/README.md) | [English](/README_en.md)

**A simple blog implemented based on Github REST API, Issues, Labels, and Github Pages.**

> [!WARNING]
> Access frequency is limited (approximately 60 times per person per hour). See: [Rate limits for the REST API](https://docs.github.com/zh/rest/using-the-rest-api/rate-limits-for-the-rest-api).

## ✨ Project Features

+ 👐 Open source, free, no ads
+ 🌗 Dark theme
+ 💪 No backend server, data sourced from Github API
+ 📱 Mobile compatible
+ 🌏 i18n multilingual support

## 🔨 Operating Principles

By adding specific labels to each Issue, these Issues can be categorized into corresponding content sections. When users visit, the frontend will filter relevant Issues based on these labels and render them in the HTML page according to section styles. For example: Issues with the `func:article` label belong to the article section, while Issues with the `func:album` label belong to the album section.

## 🔖 Label Description

| Label Name             | Description              |
| ---------------------- | ------------------------ |
| `func:article`         | Article                  |
| `func:album`           | Album                    |
| `func:about`           | Blog Introduction        |
| `func:banner`          | Homepage Carousel        |
| `func:message`         | Message Board            |
| `func:link`            | Friend Links             |
| `func:history`         | Update History           |
| `func:history:warning` | Update History - Warning |
| `func:history:info`    | Update History - Info    |
| `func:history:success` | Update History - Success |
| `func:history:error`   | Update History - Error   |
| `func:history:default` | Update History - Default |
| `func:hidden-comment`  | Hidden Comments          |
| `func:pin`             | Pinned                   |

## 📦 Starting the Project

> [!TIP]
> The project uses `pnpm` for package management. Please ensure that `pnpm` is installed globally.

```shell
pnpm i
pnpm dev
pnpm build
```

## 🚀 Quick Start

+ [New Article](https://github.com/xiaohuohumax/MiaoJi/issues/new?title=Article%20Title&labels=func:article&body=%3C!--%0Aexcerpt:%20Article%20excerpt%0A--%3E%0A%0AArticle%20content)
+ [New Album](https://github.com/xiaohuohumax/MiaoJi/issues/new?title=Album%20Title&labels=func:album&body=!%5B%5D())
+ [New History](https://github.com/xiaohuohumax/MiaoJi/issues/new?title=History%20Title&labels=func:history&body=Hostory%20content)

## ♻ Submission Process

```shell
pnpm changeset
pnpm changeset version
pnpm i
pnpm commit
```

## ℹ License

[MIT](/LICENSE)
