import { UnknownAction } from 'redux';
import { Resizable, Stage, Page } from '../../components/interfaces';

const firstPage = <Page> {
    contentElms: []
}

const initialState = <Stage & Resizable> {
    with: 400,
    height: 400,
    currentlyEditedPage: 0,
    pages: [firstPage]   
}


const StageReducer = (state = initialState, action: UnknownAction) => {
    switch (action.type) {
        case 'ADD_NEW_PAGE':
            const pages = state.pages.concat([action.payload.page]);

            return Object.assign({}, state, { pages });
        default:
            return state;
    }
}

export default StageReducer;