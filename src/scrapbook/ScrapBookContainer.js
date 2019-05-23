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
      width: 375,
      height: 30
    },
    imageHolder: {
      flex: 1,
      backgroundColor: 'rgba(0, 170, 204, .35)'
    }
  })
  return(
    <View style={styles.container}>
      <Text style={styles.imageHolder}>
        <Image style={styles.image} source={construction} />
      </Text>
    </View>
  );
}

export default ScrapBookContainer;
