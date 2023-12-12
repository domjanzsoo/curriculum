const initialState = {
    text: 'initial value'
};

const testReducer = (state = initialState, action) => {
    if (action.type === `TEST`) {
      return Object.assign({}, state, {
        text: action.changedText,
      })
    }
    return state
  };

export default testReducer;