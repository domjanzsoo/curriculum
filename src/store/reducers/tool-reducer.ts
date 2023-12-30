import { ToolState, CommonAction } from '../../components/interfaces';

const initialState = <ToolState> {
    tools: [],
    barPosition: {
        x: 0,
        y: 0
    }
};

const ToolbarReducer = (state = initialState, action: CommonAction) => {
    switch (action.type) {
        case 'UPDATE_BAR_POSITION':
            return Object.assign({}, state, {
                barPosition: action?.payload?.position
            });
        case 'ADD_NEW_TOOL_ITEM':
            const tools = state.tools.concat([action?.payload?.newToolItem]);

            return Object.assign({}, state, {
                tools: tools
            });
        default:
            return state;
        
    } 
};

export default ToolbarReducer;