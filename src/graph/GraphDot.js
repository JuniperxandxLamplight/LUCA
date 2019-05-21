import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Moment from 'moment';
import rose from './../../assets/rose.png';

function GraphDot(props){

  const now = new Moment();
  const days = props.date.diff(now, 'day');

  const heightPercent = (Dimensions.get('window').height * .9) / 100;
  const widthPercent = Dimensions.get('window').width / 100;
  const width = 50 + days;
  const height = 50 + days;
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
    }
  })

  return(
    <View>
      <Image source={rose} style={styles.dot}/>
    </View>
  );
}



export default GraphDot;
