import { UnknownAction } from 'redux';


interface TestState {
    text: string
}

const initialState = {
    text: 'initial value';
};

const testReducer = (state = initialState, action: UnknownAction) => {
    if (action.type === `TEST`) {
      return Object.assign({}, state, {
        text: action.changedText,
      })
    }
    return state;
  };

export default testReducer;