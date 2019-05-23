import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UpkeepSliders from './UpkeepSliders';
import UpkeepWelcome from './UpkeepWelcome';
import UpkeepConfirmation from './UpkeepConfirmation';

function UpkeepContainer(props){

  let confirmation;

  function confirmationShow(){
    confirmation = <UpkeepConfirmation/>
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: 'auto',
      marginBottom: 'auto'
    }
  })

  return(
    <View style={styles.container}>
      {confirmation}
      <UpkeepWelcome/>
      <UpkeepSliders onUpdatePin={props.onUpdatePin} confirmationShow={confirmationShow}/>
    </View>
  );
}

export default UpkeepContainer;
