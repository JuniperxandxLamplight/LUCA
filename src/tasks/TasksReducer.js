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
        };

      console.log('this is add task state');
      console.log(newState);

      return newState;
    case types.EDIT_TASK:
      newState = Object.assign({}, state);

      newState[action.id].name = action.name;
      newState[action.id].frequency = action.frequency;
      newState[action.id].energy = action.energy;

      console.log('this is edited task state');
      console.log(newState);

      return newState;
    default:
      return state;
  }
};

export default tasksReducer;
