import {combineReducers} from 'redux';
import {initialState} from './InitialState';
import upkeepReducer from './../upkeep/UpkeepReducer';
import profileReducer from './../startUp/ProfileReducer';
import tasksReducer from './../tasks/TasksReducer';

export const rootReducer = combineReducers ({
  pins: upkeepReducer,
  profile: profileReducer,
  tasks: tasksReducer
})
