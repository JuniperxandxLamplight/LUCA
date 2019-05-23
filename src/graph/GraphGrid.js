import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import GraphView from './GraphView';
import GraphDot from './GraphDot';
import {connect} from 'react-redux';

function GraphGrid(props){
  console.log(props);

  return(
    <View>
      {Object.keys(props.state.pins).map((dot, index) =>
        <GraphDot
          key={index}
          id={props.state.pins[dot].id}
          date={props.state.pins[dot].date}
          x={props.state.pins[dot].x}
          y={props.state.pins[dot].y}
        />
      )}
      <GraphView/>
    </View>
  );
}

const mapStateToProps = state => {
  return{
    state: state
  }
}

export default connect(mapStateToProps)(GraphGrid);
