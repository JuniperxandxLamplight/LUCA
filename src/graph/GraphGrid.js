import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import GraphView from './GraphView';
import GraphDot from './GraphDot';

function GraphGrid(){

  return(
    <View>
      <Text>I'm the grid!</Text>
      <GraphView/>
      <GraphDot/>
    </View>
  );
}

export default GraphGrid;
