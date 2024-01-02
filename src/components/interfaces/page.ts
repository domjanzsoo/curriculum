import { ToolItem } from "./tool";
import { Draggable } from "./draggable";

export interface Page {
    id: string,
    contentElms: Array<ToolItem & Draggable>
}