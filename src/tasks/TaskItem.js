import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {body, button} from './../constants/Mixins';

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
      text: {
        ...body,
        textAlign: 'left',
        marginLeft: 20
      },
      buttonHolder: {
        ...button,
      },
      header: {
        ...body,
        fontSize: 30,
        textAlign: 'left',
      },
      card: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#007D0D',
        borderRadius: 15
      },
      details: {
        borderTopWidth: 1,
        borderColor: '#007D0D'
      },
      buttonHolder: {
        ...button,
        marginBottom: 5
      }
    })

    return(
      <View style={styles.card}>
        <Text style={styles.header} onPress={this.handleOpenDetails}>{this.props.name}</Text>
        {this.state.detailsOpen &&
          <View style={styles.details}>
            <Text style={styles.text}>Frequency: {this.props.frequency}</Text>
            <Text style={styles.text}>Energy: {this.props.energy}</Text>
            <Text style={styles.text}>Reminders to Date: {this.props.reminders}</Text>
            <View style={styles.buttonHolder}>
              <Button color="#914EFF" onPress={this.handleSendEdit} title="Edit" />
            </View>
          </View>
        }
      </View>
    );
  }
}

export default TaskItem;
