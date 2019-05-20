import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import GraphView from './GraphView';
import GraphDot from './GraphDot';
import {connect} from 'react-redux';

function GraphGrid(props){

  return(
    <View>
      <GraphView/>
      {props.state.pins.map((dot, index) =>
        <GraphDot
          key={index}
          id={dot.id}
          date={dot.date}
          x={dot.x}
          y={dot.y}
        />
      )}
    </View>
  );
}

const mapStateToProps = state => {
  return{
    state: state
  }
}

export default connect(mapStateToProps)(GraphGrid);
