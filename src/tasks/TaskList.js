import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
import TaskItem from './TaskItem';

function TaskList(props){

  return(
    <View>
      {Object.keys(props.state.tasks).map((task, index) =>
        <TaskItem
          key={index}
          name={props.state.tasks[task].name}
          frequency={props.state.tasks[task].frequency}
          energy={props.state.tasks[task].energy}
          set={props.state.tasks[task].set}
          reminders={props.state.tasks[task].reminders}
        />
      )}
    </View>
  );
}

mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(TaskList);
