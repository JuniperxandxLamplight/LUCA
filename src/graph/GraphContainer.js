import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Moment from 'moment';
import GraphGrid from './GraphGrid';
import UpkeepContainer from './../upkeep/UpkeepContainer';
import {connect} from 'react-redux';

function GraphContainer(props){

  let graphShowing;
  const now = new Moment();
  const timeSinceLastPin = props.state.profile.lastPin.diff(now, 'hours');
  console.log(now.hour());
  console.log(props.state.profile.pinTime);
  console.log(timeSinceLastPin);

  if ((now.hour() > props.state.profile.pinTime) && (timeSinceLastPin < -8)){
    graphShowing = <UpkeepContainer/>
  } else {
    graphShowing = <GraphGrid/>
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });
  return(
    <View style={styles.container}>
      {graphShowing}
    </View>
  );
}

const mapStateToProps = state => {
  return{
    state: state
  }
}

export default connect(mapStateToProps)(GraphContainer);
