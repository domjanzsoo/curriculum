import { UnknownAction } from 'redux';
import Draggable from '../../components/interfaces/draggable';


interface ToolsState {
    tools: { id: string, component: object} [],
    barPosition: Draggable,
}

const initialState = <ToolsState> {
    tools: [],
    barPosition: {
        x: 0,
        y: 0
    }
};

const ToolbarReducer = (state = initialState, action: UnknownAction) => {
    switch (action.type) {
        case 'UPDATE_BAR_POSITION':
            return Object.assign({}, state, {
                barPosition: action.payload.position
            });
        case 'ADD_NEW_TOOL_ITEM':
            const tools = state.tools.concat([action.payload.newToolItem]);

            return Object.assign({}, state, {
                tools: tools
            });
        default:
            return state;
        
    } 
};

export default ToolbarReducer;