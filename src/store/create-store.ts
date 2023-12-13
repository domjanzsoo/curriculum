import { createStore as createReduxStore } from 'redux';
import rootReducer from './reducers';

const createStore = () => createReduxStore(rootReducer);

export default createStore;