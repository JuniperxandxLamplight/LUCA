import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import construction from './../../assets/construction.png';

function ScrapBookContainer(){
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    image: {
      flex: 1,
      resizeMode: 'contain'
    }
  })
  return(
    <View style={styles.container}>
      <Image style={styles.image} source={construction} />
    </View>
  );
}

export default ScrapBookContainer;
