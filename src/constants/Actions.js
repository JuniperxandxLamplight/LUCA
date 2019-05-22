import *  as types from './ActionTypes';

export const setPin = (x, y, date, id) => ({
  type: types.SET_PIN,
  x: x,
  y: y,
  date: date,
  id: id
})

export const addTask = (id, name, frequency, energy, set, reminders) => ({
  type: types.ADD_TASK,
  id: id,
  name: name,
  frequency: frequency,
  energy: energy,
  set: set,
  reminders: reminders
});

export const editTask = (id, name, frequency, energy) => ({
  type: types.EDIT_TASK,
  id: id,
  name: name,
  frequency: frequency,
  energy: energy
});

export const deleteTask = (id) => ({
  type: types.DELETE_TASK,
  id: id
});
