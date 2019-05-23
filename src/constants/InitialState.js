import Moment from 'moment';

const test = new Moment();
const test2 = new Moment('2019-05-19', 'YYYY-MM-DD');
const test3 = new Moment('2019-05-16', 'YYYY-MM-DD');
const test4 = new Moment('2019-05-10', 'YYYY-MM-DD');
const test5 = new Moment('2019-05-01', 'YYYY-MM-DD');
const test6 = new Moment('2019-05-02', 'YYYY-MM-DD');
const test7 = new Moment('2019-05-03', 'YYYY-MM-DD');
const test8 = new Moment('2019-05-13', 'YYYY-MM-DD');
const test9 = new Moment('2019-05-14', 'YYYY-MM-DD');
const test10 = new Moment('2019-05-15', 'YYYY-MM-DD');

const pinTest = new Moment('2019-05-19', 'YYYY-MM-DD');

export const initialState = {
  profile: {
    created: true,
    name: 'Aurora',
    favColor: '#008c02',
    pinTime: 10,
    lastPin: pinTest
  },
  pins: {
    testId:{
      x: 45,
      y: 45,
      date: test,
      id: 'testId'
    },
    testId2:{
      x: 23,
      y: 56,
      date: test2,
      id: 'testId2'
    },
    testId3:{
      x: 34,
      y: 34,
      date: test3,
      id: 'testId3'
    },
    testId4:{
      x: 15,
      y: 78,
      date: test4,
      id: 'testId4'
    },
    testId5:{
      x: 98,
      y: 1,
      date: test5,
      id: 'testId5'
    },
    testId6:{
      x: 15,
      y: 12,
      date: test6,
      id: 'testId6'
    },
    testId7:{
      x: 67,
      y: 78,
      date: test7,
      id: 'testId7'
    },
    testId8:{
      x: 55,
      y: 61,
      date: test8,
      id: 'testId8'
    },
    testId9:{
      x: 86,
      y: 76,
      date: test9,
      id: 'testId9'
    },
    testId10:{
      x: 50,
      y: 50,
      date: test10,
      id: 'testId10'
    },
  },
  tasks: {
    taskId: {
      name: 'Call Dad',
      frequency: 'high',
      energy: 'medium',
      set: test,
      reminders: 5,
      id: 'taskId'
    },
    taskId1: {
      name: 'Buy New Sweater',
      frequency: 'low',
      energy: 'high',
      set: test,
      reminders: 3,
      id: 'taskId1'
    },
    taskId2: {
      name: 'Do Daily Writing',
      frequency: 'high',
      energy: 'low',
      set: test,
      reminders: 15,
      id: 'taskId2'
    },
    taskId3: {
      name: 'Go To Meetup',
      frequency: 'medium',
      energy: 'high',
      set: test,
      reminders: 1,
      id: 'taskId3'
    },
    taskId4: {
      name: 'Hang Out with Bestie',
      frequency: 'high',
      energy: 'medium',
      set: test,
      reminders: 5,
      id: 'taskId4'
    },
    taskId5: {
      name: 'Return Kim\'s Book',
      frequency: 'high',
      energy: 'low',
      set: test,
      reminders: 5,
      id: 'taskId5'
    },
    taskId6: {
      name: 'Read Atlas Shrugged',
      frequency: 'low',
      energy: 'high',
      set: test,
      reminders: 3,
      id: 'taskId6'
    },
    taskId7: {
      name: 'Meal Prep',
      frequency: 'high',
      energy: 'high',
      set: test,
      reminders: 5,
      id: 'taskId7'
    },
    taskId8: {
      name: 'Buy Batteries',
      frequency: 'high',
      energy: 'high',
      set: test,
      reminders: 5,
      id: 'taskId'
    },
    taskId9: {
      name: 'Clean Rain Gutters',
      frequency: 'low',
      energy: 'high',
      set: test,
      reminders: 5,
      id: 'taskId'
    }
  }
}
