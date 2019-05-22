import React from 'react';
import { StyleSheet, Text, View, Picker, TextInput, Button } from 'react-native';

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
    console.log(this.props);
    return(
      <View>
        <Text>Name</Text>
        <TextInput
          value={this.state.name}
          placeholder="Name of Task"
          onChangeText={value => this.nameSet(value)}
          />
        <Text>Frequency of Reminders</Text>
        <Picker
          selectedValue={this.state.frequency}
          onValueChange={value => this.frequencySet(value)}>
          <Picker.Item label="High" value="high" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Low" value="low" />
        </Picker>
        <Text>Energy Required</Text>
        <Picker
          selectedValue={this.state.energy}
          onValueChange={value => this.energySet(value)}>
          <Picker.Item label="High" value="high" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Low" value="low" />
        </Picker>
        <Button onPress={this.sendData} title="Done"/>
      </View>
    );
  }
}

export default TaskEditForm;
