import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GraphGrid from './GraphGrid';

function GraphContainer(){
  const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });
  return(
    <View style={styles.container}>
      <Text>I'm the grid container!</Text>
      <GraphGrid/>
    </View>
  );
}

export default GraphContainer;
