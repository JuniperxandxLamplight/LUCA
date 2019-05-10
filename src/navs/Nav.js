import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Nav() {
  return(
    <View style={styles.container}>
      <Text style={styles.button}>I'm a nav button!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center'
  }
})

export default Nav;
