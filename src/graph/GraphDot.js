import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

function GraphDot(){

  const widthPercent = Dimensions.get('window').width / 100;
  const heightPercent = (Dimensions.get('window').height * .9) / 100;
  const height = heightPercent * 50
  const width = widthPercent * 50

  const styles = StyleSheet.create({
    dot:{
      flex: 1,
      position: 'absolute',
      top: height,
      left: width,
      borderColor: 'green',
      borderWidth: 1
    }
  })

  return(
    <View>
      <Text style={styles.dot}>I'm a dot!</Text>
    </View>
  );
}

export default GraphDot;
