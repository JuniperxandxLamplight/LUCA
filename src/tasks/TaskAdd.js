import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
import TaskEditForm from './TaskEditForm';
import {editTask} from './../constants/Actions';

function TaskAdd(props){

  function gatherDataFromForm(name, frequency, energy, id){
    console.log('gather data works');
    console.log([name, frequency, energy, id]);
    props.dispatch(editTask(id, name, frequency, energy));
    props.onCloseAddTask();
    console.log('got to the end of gather');
  }

  return(
    <View>
      <TaskEditForm
        taskId={props.taskId}
        taskName={props.state.tasks[props.taskId].name}
        taskFreqency={props.state.tasks[props.taskId].frequency}
        taskEnergy={props.state.tasks[props.taskId].energy}
        sendData={gatherDataFromForm}
      />
    </View>
  );
}

const mapStateToProps = state => {
  return{
    state: state
  }
}

export default connect(mapStateToProps)(TaskAdd);
