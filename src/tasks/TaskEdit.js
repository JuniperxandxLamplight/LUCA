import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {connect} from 'react-redux';
import TaskEditForm from './TaskEditForm';
import {editTask, deleteTask} from './../constants/Actions';
import {body} from './../constants/Mixins';


class TaskEdit extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      deleteConfirmation: false
    }
    this.gatherDataFromForm = this.gatherDataFromForm.bind(this);
    this.deleteQuestionToggle = this.deleteQuestionToggle.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  gatherDataFromForm(name, frequency, energy, id){
    this.props.dispatch(editTask(id, name, frequency, energy));
    this.props.onCloseEditor();
  }

  deleteQuestionToggle(){
    if (this.state.deleteConfirmation){
      this.setState({
        deleteConfirmation: false
      })
    } else{
      this.setState({
        deleteConfirmation: true
      })
    }
  }
  deleteTask(){
    this.props.dispatch(deleteTask(this.props.taskId));
    this.props.onCloseEditor();
  }

  render(){

    const styles = StyleSheet.create({
      text: {
        ...body
      }
    })

    return(
      <View>
        {!this.state.deleteConfirmation &&
          <View>
            <TaskEditForm
              taskId={this.props.taskId}
              taskName={this.props.state.tasks[this.props.taskId].name}
              taskFreqency={this.props.state.tasks[this.props.taskId].frequency}
              taskEnergy={this.props.state.tasks[this.props.taskId].energy}
              sendData={this.gatherDataFromForm}
              />
            <Button color="#914EFF" onPress={this.deleteQuestionToggle} title="Delete This Task" />
          </View>
        }
        {this.state.deleteConfirmation &&
        <View>
          <Text style={styles.text}>Are you sure you want to delete this task?</Text>
          <Button color="#914EFF" onPress={this.deleteTask} title="Yes please" />
          <Button color="#914EFF" onPress={this.deleteQuestionToggle} title="Actually, no thanks" />
        </View>}
        </View>
      );
  }
}

const mapStateToProps = state => {
  return{
    state: state
  }
}

export default connect(mapStateToProps)(TaskEdit);
