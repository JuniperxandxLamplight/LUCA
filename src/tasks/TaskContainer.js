import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './TaskList';
import TaskEdit from './TaskEdit';


export default class TaskContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isEditing: false
    }
    this.handleOpenEditor = this.handleOpenEditor.bind(this);
  }

  handleOpenEditor(){
    this.setState = ({
      isEditing: true
    })
  }

  render(){
    return(
      <View style={{flex: 1}}>
        {!this.state.isEditing &&
        <TaskList onOpenEditor={this.handleOpenEditor}/> }
        {this.state.isEditing &&
        <TaskEdit/>}
      </View>
    );
  }
}
