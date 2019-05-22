import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './TaskList';
import TaskEdit from './TaskEdit';
import TaskAdd from './TaskAdd';


export default class TaskContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
      isAdding: false
    }
    this.handleOpenEditor = this.handleOpenEditor.bind(this);
    this.handleCloseEditor = this.handleCloseEditor.bind(this);
    this.handleOpenAddTask = this.handleOpenAddTask.bind(this);
    this.handleCloseAddTask = this.handleCloseAddTask.bind(this);
    let editorView;
    let addTaskView;
  }

  handleCloseEditor(){
    this.setState({
      isEditing: false,
      isAdding: false
    });
  }
  handleOpenEditor(id){
    this.setState({
      isEditing: true,
      isAdding: false
    });
    editorView = <TaskEdit taskId={id} onCloseEditor={this.handleCloseEditor} />
  }

  handleCloseAddTask(){
    this.setState({
      isEditing: false,
      isAdding: false
    })
  }
  handleOpenAddTask(id){
    this.setState({
      isEditing: false,
      isAdding: true
    });
    addTaskView = <TaskAdd taskId={id} onCloseAddTask={this.handleCloseAddTask} />
  }

  render(){
    return(
      <View style={{flex: 1}}>
        {!this.state.isEditing &&
        !this.state.isAdding &&
        <TaskList onOpenEditor={this.handleOpenEditor} onOpenAddTask={this.handleOpenAddTask}/> }
        {this.state.isEditing &&
        editorView}
        {this.state.isAdding &&
        addTaskView}
      </View>
    );
  }
}
