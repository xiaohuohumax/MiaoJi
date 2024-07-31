import MarkdownIt from 'markdown-it';
import Token from 'markdown-it/lib/token.mjs';

const md = new MarkdownIt();

function parse(mdContext: string | null) {
    if (mdContext != null) {
        const token = new Token('', '', 0);
        token.children = md.parse(mdContext, {});
        return token;
    }
    return null;
}

function walkFilter<T>(token: Token | null, callback: (token: Token) => T | undefined): T[] {
    const tokens: T[] = [];
    if (token && token.children) {
        for (const child of token.children) {
            const c = callback(child);
            c && tokens.push(c);
            tokens.push(...walkFilter(child, callback));
        }
    }
    return tokens;
}

export interface Image {
    src: string,
    alt: string
}

export interface Anchor {
    href: string,
    content: string
}

export function gImages(mdContext: string | null) {
    return walkFilter<Image>(parse(mdContext), node => {
        if (node.type == 'image') {
            const src = node.attrGet('src');
            const alt = node.attrGet('content');
            if (src != null) {
                return { src, alt: alt || '' };
            }
        }
    });
}

export function gAnchors(mdContext: string | null) {
    return walkFilter(parse(mdContext), node => {
        if (!node.children) {
            return;
        }
        const lOpenIndex = node.children.findIndex(n => n.type == 'link_open');
        if (lOpenIndex >= 0 && lOpenIndex + 1 < node.children.length) {
            const lOpenNode = node.children[lOpenIndex];
            const ltextNode = node.children[lOpenIndex + 1];
            const href = lOpenNode.attrGet('href');
            const content = ltextNode.content;
            if (href != null) {
                return { href, content: content || '' };
            }
        }
    });
}