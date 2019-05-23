import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {connect} from 'react-redux';
import Moment from 'moment';
import {setPin} from './../constants/Actions';
import {v4} from 'uuid';
import Slider from 'react-native-slider';
import {body} from './../constants/Mixins';


function UpkeepSliders(props){

  let energy = 50;
  let mood = 50;

  function energySet(value){
    energy = Math.floor(value);
  }
  function moodSet(value){
    mood = Math.floor(value);
  }

  function handleSetPin(){
    const now = new Moment();
    const id = v4();
    props.dispatch(setPin(mood, energy, now, id));
    props.onUpdatePin();
    // props.confirmationShow();
  }

  const styles = StyleSheet.create({
    text: {
      ...body
    },
    slider: {
      width: 200,
      height: 50,
    }
  })
  return(
    <View>
      <Text style={styles.text}>Energy</Text>
      <Slider
        style={styles.slider}
        value={50}
        onValueChange={value => energySet(value)}
        minimumValue={1}
        maximumValue={100}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FFFFFF"
      />
      <Text style={styles.text}>Mood</Text>
      <Slider
        style={styles.slider}
        value={50}
        onValueChange={value => moodSet(value)}
        minimumValue={1}
        maximumValue={100}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FFFFFF"
        />
      <Button onPress={handleSetPin} title="Done"/>
    </View>
  );
}

const mapStateToProps = state => {
  return{
    state: state
  }
}

export default connect(mapStateToProps)(UpkeepSliders);
