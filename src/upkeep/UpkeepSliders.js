import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Slider from 'react-native-slider';

function UpkeepSliders(){

  let _mood = null;
  let _energy = null;

  function testClick(){
    console.log(_mood);
  }

  const styles = StyleSheet.create({
    slider: {
      width: 200,
      height: 50,
    }
  })
  return(
    <View>
      <Slider
        style={styles.slider}
        value={50}
        minimumValue={1}
        maximumValue={100}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FFFFFF"
        ref={(value) => {_mood = value}}
      />
      <Button onPress={testClick} title="Button Button"/>
    </View>
  );
}

export default UpkeepSliders;
