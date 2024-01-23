import { Draggable } from "../draggable"

export interface ToolState {
    tools: Array<{
        type: string,
        id: string,
        component: object
    }>,
    barPosition: Draggable
}