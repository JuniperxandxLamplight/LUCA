import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Moment from 'moment';

function GraphDot(props){
  const now = new Moment();
  const days = props.date.diff(now, 'day');

  const heightPercent = (Dimensions.get('window').height * .9) / 100;
  const widthPercent = Dimensions.get('window').width / 100;
  const width = 30 + days;
  const height = 30 + days;
  const top = (heightPercent * props.y) - height;
  const left = (widthPercent * props.x) - width;
  const opacity = (100 + (days * 3)) / 100;

  const styles = StyleSheet.create({
    dot:{
      height: height,
      width: width,
      position: 'absolute',
      top: top,
      left: left,
      opacity: opacity,

      backgroundColor: 'green',
      borderRadius: 100,
    }
  })

  return(
    <View>
      <View style={styles.dot}></View>
    </View>
  );
}



export default GraphDot;
