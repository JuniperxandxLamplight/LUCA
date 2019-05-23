import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {body} from './../constants/Mixins';


function GraphView(){

  const heightPercent = (Dimensions.get('window').height * .9) / 100;
  const widthPercent = Dimensions.get('window').width / 100;

  const styles  = StyleSheet.create({
    top: {
      ...body,
      left: -25
    },
    right: {
      ...body,
      textAlign: 'right',
      top: heightPercent * 37
    },
    bottom: {
      ...body,
      textAlign: 'center',
      left: 25,
      top: heightPercent * 73
    },
    left: {
      ...body,
      textAlign: 'left',
      textDecorationLine: 'underline',
      top: heightPercent * 40
    },
    line: {
      ...body,
      textAlign: 'right',
      top: heightPercent * 37,
      color: 'transparent',
      textDecorationLine: 'underline',
      textDecorationColor: '#007D0D'
    }
  });

  return(
    <View>
      <Text style={styles.top}>Well |</Text>
      <Text style={styles.left}>Energetic</Text>
      <Text style={styles.line}>Tired</Text>
      <Text style={styles.right}>Tired</Text>
      <Text style={styles.bottom}>| Lousy</Text>
    </View>
  );
}

export default GraphView;
