import { Resizable, Stage, Page, CommonAction } from '../../components/interfaces';

const singlePage = <Page> {
    contentElms: [],
}

const initialState = <Stage & Resizable> {
    with: 400,
    height: 400,
    currentlyEditedPage: 0,
    pages: [singlePage]   
}


const StageReducer = (state = initialState, action: CommonAction) => {
    switch (action.type) {
        case 'ADD_NEW_PAGE':
            const pages = state.pages.concat([singlePage]);

            return Object.assign({}, state, { pages });
        case 'SELECT_PAGE':
            return Object.assign({}, state, {
                currentlyEditedPage: action.payload.page
            });
        default:
            return state;
    }
}

export default StageReducer;