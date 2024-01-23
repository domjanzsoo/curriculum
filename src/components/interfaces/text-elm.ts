import Konva from 'konva';

export interface TextElm {
    [key: string]: string | number | Konva.Text | undefined,
    id: string,
    fontFamily: string,
    fontStyle: string,
    fontSize: number,
    textDecoration?: string,
    text: string,
    verticalAlign?: string,
    color?: string,
    rotation?: number,
    padding?: number,
    lineHeight?: number,
    node: Konva.Text
}