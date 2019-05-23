import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import {connect} from 'react-redux';
import Moment from 'moment';
import {v4} from 'uuid';
import TaskItem from './TaskItem';
import {addTask} from './../constants/Actions';
import {button} from './../constants/Mixins';



function TaskList(props){
  console.log('task list props');
  console.log(props);

  function openAddTask(){
    let newTaskSet = new Moment();
    let newTaskId = v4();
    props.dispatch(addTask(newTaskId, 'New Task', 'medium', 'medium', newTaskSet, 0));
    props.onOpenAddTask(newTaskId);
  }

  const styles = StyleSheet.create({
    buttonHolder: {
      ...button
    }
  })

  return(
    <View>
      <ScrollView>
        <View style={styles.buttonHolder}>
          <Button color="#914EFF" onPress={openAddTask} title="Add Task"/>
        </View>
        {Object.keys(props.state.tasks).map((task, index) =>
          <TaskItem
            key={index}
            name={props.state.tasks[task].name}
            frequency={props.state.tasks[task].frequency}
            energy={props.state.tasks[task].energy}
            set={props.state.tasks[task].set}
            reminders={props.state.tasks[task].reminders}
            id={props.state.tasks[task].id}
            onOpenEditor={props.onOpenEditor}
            />
        )}
      </ScrollView>
    </View>
  );
}

mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(TaskList);
