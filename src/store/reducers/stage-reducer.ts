import { Stageable, Page, CommonAction } from '../../components/interfaces';
import { v4 as uuidv4 } from 'uuid';

const singlePage = <Page> {
    id: uuidv4(),
    contentElms: [],
}

const initialState: Stageable = {
    width: 400,
    height: 400,
    currentlyEditedPage: singlePage.id,
    pages: [singlePage]   
}


const StageReducer = (state = initialState, action: CommonAction) => {
    switch (action.type) {
        case 'ADD_NEW_PAGE':
            const page = singlePage;
            page.id = action?.payload?.id;

            const pages = state.pages.concat([page]);

            return Object.assign({}, state, { pages });
        case 'SELECT_PAGE':
            return Object.assign({}, state, {
                currentlyEditedPage: action?.payload?.page
            });
        default:
            return state;
    }
}

export default StageReducer;