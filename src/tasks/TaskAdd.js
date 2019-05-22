import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
import TaskEditForm from './TaskEditForm';
import {editTask} from './../constants/Actions';

function TaskAdd(props){

  function gatherDataFromForm(name, frequency, energy, id){
    props.dispatch(editTask(id, name, frequency, energy));
    props.onCloseAddTask();
  }

  return(
    <View>
      <TaskEditForm
        taskId={props.taskId}
        taskName={props.state.tasks[props.taskId].name}
        taskFrequency={props.state.tasks[props.taskId].frequency}
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
