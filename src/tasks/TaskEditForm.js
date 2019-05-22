import React from 'react';
import { StyleSheet, Text, View, Picker, TextInput, Button } from 'react-native';

function TaskEditForm(props){
  console.log(props);

  let name = props.taskName;
  let frequency = props.taskFreqency;
  let energy = props.taskEnergy;

  console.log(name);
  console.log(frequency);
  console.log(energy);

  function nameSet(value){
    name = value;
  }
  function frequencySet(value){
    console.log(value);
    console.log(frequency);
    frequency = value;
    console.log(frequency);
  }
  function energySet(value){
    energy = value;
  }

  function sendData(){
    props.sendData(name, frequency, energy, props.taskId);
  }

  return(
    <View>
      <Text>Name</Text>
      <TextInput
        placeholder="Name of Task"
        value={name}
        onChangeText={value => nameSet(value)}
      />
      <Text>Frequency of Reminders</Text>
      <Picker
        selectedValue={frequency}
        onValueChange={value => frequencySet(value)}>
        <Picker.Item label="High" value="high" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="Low" value="low" />
      </Picker>
      <Text>Energy Required</Text>
      <Picker
        selectedValue={energy}
        onValueChange={value => energySet(value)}>
        <Picker.Item label="High" value="high" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="Low" value="low" />
      </Picker>
      <Button onPress={sendData} title="Done"/>
    </View>
  );
}

export default TaskEditForm;
