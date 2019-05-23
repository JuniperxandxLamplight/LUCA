import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {connect} from 'react-redux';
import Moment from 'moment';
import {setPin} from './../constants/Actions';
import {v4} from 'uuid';
import Slider from 'react-native-slider';
import {body, button} from './../constants/Mixins';


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
      ...body,
      marginTop: 20
    },
    slider: {
      width: '80%',
      height: 50,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    markerContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    markers: {
      ...body,
      fontSize: 15,
      paddingLeft: '10%',
      paddingRight: '10%'
    },
    buttonHolder: {
      ...button
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
        minimumTrackTintColor="#914EFF"
        maximumTrackTintColor="lightgray"
        thumbTintColor="#c7a5ff"
      />
      <View style={styles.markerContainer}>
        <Text style={styles.markers}>Tired</Text>
        <Text style={styles.markers}>Energetic</Text>
      </View>
      <Text style={styles.text}>Mood</Text>
      <Slider
        style={styles.slider}
        value={50}
        onValueChange={value => moodSet(value)}
        minimumValue={1}
        maximumValue={100}
        minimumTrackTintColor="#914EFF"
        maximumTrackTintColor="lightgray"
        thumbTintColor="#c7a5ff"
        />
      <View style={styles.markerContainer}>
        <Text style={styles.markers}>Well</Text>
        <Text style={styles.markers}>Lousy</Text>
      </View>
      <View style={styles.buttonHolder}>
        <Button color="#914EFF" onPress={handleSetPin} title="Done"/>
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return{
    state: state
  }
}

export default connect(mapStateToProps)(UpkeepSliders);
