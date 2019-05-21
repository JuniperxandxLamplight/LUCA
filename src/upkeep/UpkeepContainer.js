import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UpkeepSliders from './UpkeepSliders';
import UpkeepWelcome from './UpkeepWelcome';
import UpkeepConfirmation from './UpkeepConfirmation';

function UpkeepContainer(){

  let confirmation;

  function confirmationShow(){
    confirmation = <UpkeepConfirmation/>
  }

  return(
    <View>
      {confirmation}
      <UpkeepWelcome/>
      <UpkeepSliders confirmationShow={confirmationShow}/>
    </View>
  );
}

export default UpkeepContainer;
