import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';

function UpkeepWelcome(props){
  return(
    <View>
      <Text>Hello {props.state.profile.name}! How are you doing today?</Text>
    </View>
  );
}

const mapStateToProps = state => {
  return{
    state: state
  }
}

export default connect(mapStateToProps)(UpkeepWelcome);
