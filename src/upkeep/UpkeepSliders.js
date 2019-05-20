import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from 'react-native-slider';

function UpkeepSliders(){
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
      />
    </View>
  );
}

export default UpkeepSliders;
