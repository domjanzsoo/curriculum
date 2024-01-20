import { ToolItem } from './tool';
import { Draggable } from './draggable';
import { Resizable } from './resizable';
import { TextElm } from './text-elm';

export interface Page {
    id: string,
    contentElms: Array<ToolItem & Draggable & Resizable & TextElm>
}