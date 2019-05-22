import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {body} from './../constants/Mixins';

class TaskItem extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      detailsOpen: false
    }
    this.handleOpenDetails = this.handleOpenDetails.bind(this)
    this.handleSendEdit = this.handleSendEdit.bind(this)
  }

  handleOpenDetails(){
    if(this.state.detailsOpen){
      this.setState({detailsOpen: false});
    } else {
      this.setState({detailsOpen: true});
    }
  }
  handleSendEdit(){
    this.props.onOpenEditor(this.props.id);
  }


  render(){

    const styles = StyleSheet.create({
      container: {
        ...body
      }
    })
    return(
      <View >
        <Text onPress={this.handleOpenDetails} style={{fontSize: 30}}>{this.props.name}</Text>
        {this.state.detailsOpen &&
          <View>
            <Text style={styles.container}>Frequency: {this.props.frequency}</Text>
            <Text>Energy: {this.props.energy}</Text>
            <Text>Reminders to Date: {this.props.reminders}</Text>
            <Button onPress={this.handleSendEdit} title="Edit" />
          </View>
        }
      </View>
    );
  }
}

export default TaskItem;
