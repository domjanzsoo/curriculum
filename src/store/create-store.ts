import { createStore as createReduxStore } from 'redux';

import rootReducer from './reducers';


// const initialState = {
//   test: {
//     text: 'Initial Text'
//   }
// };

const createStore = () => createReduxStore(rootReducer);

export default createStore;