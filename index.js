
import { AppRegistry } from 'react-native';
import React from 'react';
import { View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';

const App = () => {
  return (
    <View>
      <StackNavigator/>
    </View>
  )
}
export default App;
AppRegistry.registerComponent('Broz', () => StackNavigator);
