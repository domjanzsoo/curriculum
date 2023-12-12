import { createStore as createReduxStore } from 'redux';

import rootReducer from './reducers';
 './reducers';

 const reducer = (state, action) => {
  console.log(action);
    if (action.type === `TEST`) {
      return Object.assign({}, state, {
        text: action.changedText,
      })
    }
    return state
  }


const initialState = {
text: 'Initial Text'
}

const createStore = () => createReduxStore(reducer,initialState);

export default createStore;