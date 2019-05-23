import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
import {body} from './../constants/Mixins';

function UpkeepWelcome(props){

  const styles = StyleSheet.create({
    text: {
      ...body
    }
  })

  return(
    <View>
      <Text style={styles.text}>Hello {props.state.profile.name}! How are you doing today?</Text>
    </View>
  );
}

const mapStateToProps = state => {
  return{
    state: state
  }
}

export default connect(mapStateToProps)(UpkeepWelcome);
