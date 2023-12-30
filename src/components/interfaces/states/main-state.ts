import { Draggable } from "../draggable"

export interface MainState {
    toolbar: Object,
    stage: Object
    barPosition: Draggable,
    tools: Array<Object>
}