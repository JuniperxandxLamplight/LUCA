import React from 'react';
import { StyleSheet, Text, View, Picker, TextInput, Button } from 'react-native';
import {body, button} from './../constants/Mixins';


class TaskEditForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: this.props.taskName,
      frequency: this.props.taskFrequency,
      energy: this.props.taskEnergy
    }
    this.nameSet = this.nameSet.bind(this);
    this.frequencySet = this.frequencySet.bind(this);
    this.energySet = this.energySet.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  nameSet(value){
    newState = Object.assign({}, this.state);
    newState.name = value;
    this.setState(newState);
  }
  frequencySet(value){
    newState = Object.assign({}, this.state);
    newState.frequency = value;
    this.setState(newState);
  }
  energySet(value){
    newState = Object.assign({}, this.state);
    newState.energy = value;
    this.setState(newState);
  }

  sendData(){
    this.props.sendData(this.state.name, this.state.frequency, this.state.energy, this.props.taskId);
  }

  render(){

    const styles = StyleSheet.create({
      text: {
        ...body
      },
      buttonHolder: {
        ...button
      },
      container: {
        marginTop: '7%',
      },
      input:{
        ...body,
        color: 'black',
        fontSize: 30,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#914EFF",
        borderRadius: 10,
        padding: 5
      },
      picker: {
        justifyContent: 'center',
        width: '80%',
        height: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        marginBottom: 15,
        padding: 0,
        borderWidth: 1,
        borderColor: "#914EFF",
        borderRadius: 15,
        overflow: 'hidden'
      }
    })

    return(
      <View style={styles.container}>
        <Text style={styles.text}>Name</Text>
        <TextInput
          style={styles.input}
          value={this.state.name}
          placeholder="Name of Task"
          onChangeText={value => this.nameSet(value)}
          />
        <Text style={styles.text}>Frequency of Reminders</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={this.state.frequency}
            onValueChange={value => this.frequencySet(value)}>
            <Picker.Item label="High" value="high" />
            <Picker.Item label="Medium" value="medium" />
            <Picker.Item label="Low" value="low" />
          </Picker>
        </View>
        <Text style={styles.text}>Energy Required</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={this.state.energy}
            onValueChange={value => this.energySet(value)}>
            <Picker.Item label="High" value="high" />
            <Picker.Item label="Medium" value="medium" />
            <Picker.Item label="Low" value="low" />
          </Picker>
        </View>
        <View style={styles.buttonHolder}>
          <Button color="#914EFF" onPress={this.sendData} title="Done"/>
        </View>
      </View>
    );
  }
}

export default TaskEditForm;
