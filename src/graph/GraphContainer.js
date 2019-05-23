import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Moment from 'moment';
import GraphGrid from './GraphGrid';
import UpkeepContainer from './../upkeep/UpkeepContainer';
import {connect} from 'react-redux';

class GraphContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      graphShowing: false
    }
    this.handleUpdatePin = this.handleUpdatePin.bind(this);
  }

  componentDidMount(){
    const now = new Moment();
    const timeSinceLastPin = this.props.state.profile.lastPin.diff(now, 'hours');

    if ((now.hour() > this.props.state.profile.pinTime && timeSinceLastPin < -8) || (timeSinceLastPin < -24)){
      this.setState({graphShowing: true});
    }
  }

  handleUpdatePin(){
    this.setState({graphShowing: false});
  }


  render(){
    const styles = StyleSheet.create({
      container: {
        flex: 1
      }
    });
    return(
      <View style={styles.container}>
        {this.state.graphShowing &&
          <UpkeepContainer onUpdatePin={this.handleUpdatePin} />}
            {!this.state.graphShowing &&
              <GraphGrid />}
              </View>
            );
  }
}

const mapStateToProps = state => {
  return{
    state: state
  }
}

export default connect(mapStateToProps)(GraphContainer);
