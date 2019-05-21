import constants from './../constants';

const {initialState, types } = constants;

const upkeepReducer = (state = initialState.pins, action) => {
  let newState;
  switch(action.type){
    case types.SET_PIN:
      newState = Object.assign({}, state);

      newState[action.id] = {
          x: action.x,
          y: action.y,
          date: action.date,
          id: action.id
        };

      console.log('this is upkeep reducer new state')
      console.log(newState);

      return newState;
    default:
      return state;
  }
};

export default upkeepReducer;
