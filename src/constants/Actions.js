import *  as types from './ActionTypes';

export const setPin = (x, y, date, id) => ({
  type: types.SET_PIN,
  x: x,
  y: y,
  date: date,
  id: id
})

export const addTask = (formattedName, name, frequency, energy, set, reminders) => ({
  type: types.ADD_TASK,
  formattedName: formattedName,
  name: name,
  frequency: frequency,
  energy: energy,
  set: set,
  reminders: reminders
})
