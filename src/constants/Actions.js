import *  as types from './ActionTypes';

export const setPin = (x, y, date, id) => ({
  type: types.SET_PIN,
  x: x,
  y: y,
  date: date,
  id: id
})
