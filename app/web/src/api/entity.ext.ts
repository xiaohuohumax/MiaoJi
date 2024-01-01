import { Issue } from '@miaoji/api';
import { Anchor,Image } from '@miaoji/util';

export type Photo = Issue & {
    images: Image[]
}

export type Link = Issue & {
    anchor: Anchor | null
}