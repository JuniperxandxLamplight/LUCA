import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function GraphView(){

  const styles  = StyleSheet.create({
    top: {
      alignSelf: 'center'
    }
  });

  return(
    <View>
      <Text style={styles.top}>| Well</Text>
      <Text>Lousy |</Text>
      <Text>Tired</Text>
      <Text>Energetic</Text>
    </View>
  );
}

export default GraphView;
