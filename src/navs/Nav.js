import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import roseNav from './../../assets/roseNav.png';
import taskNav from './../../assets/taskNav.png';
import bookNav from './../../assets/bookNav.png';

function Nav(props) {

  let image;
  if (props.image === 'rose'){
    image = roseNav;
  } else if (props.image === 'task'){
    image = taskNav;
  } else {
    image = bookNav;
  }

  return(
    <View style={styles.container}>
      <Image source={image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
    textAlign: 'center'
  }
})

export default Nav;
