import constants from './../constants';

const {initialState, types } = constants;

const tasksReducer = (state = initialState.tasks, action) => {
  let newState;
  switch(action.type){
    case types.ADD_TASK:
      newState = Object.assign({}, state);

      newState[action.formattedName] = {
        name: name,
        frequency: frequency,
        energy: energy,
        set: set,
        reminders: reminders,
        };

      console.log('this is task reducer new state')
      console.log(newState);

      return newState;
    default:
      return state;
  }
};

export default tasksReducer;
