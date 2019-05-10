import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Nav from './src/navs/Nav';
import GraphContainer from './src/graph/GraphContainer';
import TaskContainer from './src/tasks/TaskContainer';

export default class App extends React.Component {

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
      },
      body: {
        flex: 9,
        borderWidth: 1,
        borderColor: 'black'
      },
      navBar: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }
    });

    return (
      <NativeRouter>
        <View style={styles.container}>

          <View style={styles.body}>
            <Route exact path="/" component={GraphContainer} />
            <Route path="/tasks" component={TaskContainer} />
          </View>

          <View style={styles.navBar}>
            <Link to="/">
              <Nav/>
            </Link>
            <Link to="/tasks">
              <Nav/>
            </Link>
            <Link to="/scrapbook">
              <Nav/>
            </Link>
          </View>
        </View>
      </NativeRouter>
    );
  }
}
