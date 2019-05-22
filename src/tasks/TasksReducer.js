import constants from './../constants';

const {initialState, types } = constants;

const tasksReducer = (state = initialState.tasks, action) => {
  let newState;
  switch(action.type){
    case types.ADD_TASK:
      newState = Object.assign({}, state);

      newState[action.id] = {
        name: action.name,
        frequency: action.frequency,
        energy: action.energy,
        set: action.set,
        reminders: action.reminders,
        id: action.id
      }

      console.log('actions');
      console.log(action.name);
      console.log(action.frequency);
      console.log(action.energy);
      console.log(action.set);
      console.log(action.reminders);
      console.log('new state in add  reducer');
      console.log(newState);

      return newState;
    case types.EDIT_TASK:
      newState = Object.assign({}, state);

      newState[action.id].name = action.name;
      newState[action.id].frequency = action.frequency;
      newState[action.id].energy = action.energy;

      return newState;
    case types.DELETE_TASK:
      newState = Object.assign({}, state);

      delete newState[action.id];

      console.log('state reducer reached');

      return newState;
    default:
      return state;
  }
};

export default tasksReducer;
