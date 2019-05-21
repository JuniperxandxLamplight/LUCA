import constants from './../constants';

const {initialState, types } = constants;

const upkeepReducer = (state = initialState.profile, action) => {
  let newState;
  switch(action.type){
    case types.SET_PIN:
      newState = Object.assign({}, state);

      newState.lastPin = action.date;

      console.log('this is profile reducer new state');
      console.log(newState);

      return newState;
    default:
      return state;
  }
};

export default upkeepReducer;
