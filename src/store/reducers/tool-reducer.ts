import { UnknownAction } from 'redux';


interface ToolsState {
    tools: { id: string, component: object} [],
    barPosition: {
        x: number,
        y: number
    }
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
            console.log('Update bar position');

            return Object.assign({}, state, {
                barPosition: action.payload.position
            });
            break;
        case 'ADD_NEW_TOOL_ITEM':
            console.log('add new tool ixtem');
            const tools = state.tools;

            tools.push(action.payload.newToolItem);

            return Object.assign({}, state, {
                tools: tools
            });
            break;
        default:
            return state;
        
    } 
};

export default ToolbarReducer;