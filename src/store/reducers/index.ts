import {combineReducers } from 'redux';
import testReducer from './test-reducer';
import ToolbarReducer from './tool-reducer';

const rootReducer = combineReducers({
    test: testReducer,
    toolbar: ToolbarReducer
});

export default rootReducer; 