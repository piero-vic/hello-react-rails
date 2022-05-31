const UPDATE_GREETING = 'UPDATE_GREETING'

export const fetchGreeting = () => async (dispatch) => {
  const response = await fetch('/v1/random');
  const greeting = await response.json();
  if (response.ok) {
    dispatch({type: UPDATE_GREETING, payload: greeting});
  }
};

export const greetingReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_GREETING:
      return action.payload;
    default:
      return state;
  }
};
