import {combineReducers } from 'redux';
import ToolbarReducer from './tool-reducer';
import StageReducer from './stage-reducer';

const rootReducer = combineReducers({
    toolbar: ToolbarReducer,
    stage: StageReducer
});

export default rootReducer; 