import Moment from 'moment';

const test = new Moment();
const test2 = new Moment('2019-05-19', 'YYYY-MM-DD');
const test3 = new Moment('2019-05-16', 'YYYY-MM-DD');
const test4 = new Moment('2019-05-10', 'YYYY-MM-DD');
const test5 = new Moment('2019-05-01', 'YYYY-MM-DD');

export const initialState = {
  profile: {
    created: true,
    name: 'Aurora',
    favColor: '#008c02',
  },
  pins: [
    {
      x: 45,
      y: 45,
      date: test,
      id: 'testId'
    },
    {
      x: 23,
      y: 56,
      date: test2,
      id: 'testId2'
    },
    {
      x: 34,
      y: 34,
      date: test3,
      id: 'testId3'
    },
    {
      x: 15,
      y: 78,
      date: test4,
      id: 'testId4'
    },
    {
      x: 98,
      y: 1,
      date: test5,
      id: 'testId5'
    },
  ],
  tasks: [
    {
      name: 'Call Mom',
      frequency: 'high',
      energy: 'high',
      set: test,
      reminders: 5
    }
  ]
}
