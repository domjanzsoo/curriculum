import {combineReducers } from 'redux';
import testReducer from './test-reducer';
import ToolbarReducer from './tool-reducer';
import StageReducer from './stage-reducer';

const rootReducer = combineReducers({
    test: testReducer,
    toolbar: ToolbarReducer,
    stage: StageReducer
});

export default rootReducer; 