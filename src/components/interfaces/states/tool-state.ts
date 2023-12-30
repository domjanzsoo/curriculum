import { Draggable } from "../draggable"

export interface ToolState {
    tools: Array<{
        id: string,
        component: object
    }>,
    barPosition: Draggable
}