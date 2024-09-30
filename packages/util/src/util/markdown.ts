import MarkdownIt from 'markdown-it'
import Token from 'markdown-it/lib/token.mjs'
import yaml from 'yamljs'

function parse(content: string): Token {
  const token = new Token('', '', 0)
  token.children = new MarkdownIt().parse(content, {})
  return token
}

function walkFilter<R>(token: Token, filter: (token: Token) => R | undefined): R[] {
  const result: R[] = []
  if (token && token.children) {
    token.children.forEach((child) => {
      const r = filter(child)
      r && result.push(r)
      result.push(...walkFilter(child, filter))
    })
  }
  return result
}

export interface MarkdownImage {
  src: string
  alt: string
}

export function parseImages(content: string): MarkdownImage[] {
  const token = parse(content)
  return walkFilter<MarkdownImage>(token, (token: Token) => {
    if (token.type === 'image') {
      const src = token.attrGet('src')
      const alt = token.attrGet('content')
      if (src) {
        return { src, alt: alt || '' }
      }
    }
    return undefined
  })
}

export function parseConfig<T extends Partial<Record<string, any>>>(content: string): T {
  const result: T = {} as T
  const match = content.match(/^<!--((.|\r?\n)*?)\r?\n-->/)
  if (match) {
    try {
      return yaml.parse(match[1])
    }
    // eslint-disable-next-line unused-imports/no-unused-vars
    catch (_) { }
  }
  return result
}

export interface MarkdownLink {
  href: string
  content: string
}

export function parseLinks(content: string) {
  return walkFilter<MarkdownLink>(parse(content), (token: Token) => {
    const children = token.children
    if (children) {
      const linkIndex = children.findIndex(child => child.type === 'link_open')
      if (linkIndex >= 0 && children.length >= linkIndex + 1) {
        const href = children[linkIndex].attrGet('href')
        const content = children[linkIndex + 1].content
        if (href && content) {
          return { href, content }
        }
      }
    }
    return undefined
  })
}
