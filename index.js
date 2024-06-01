// App.tsx
import { AppRegistry, View } from 'react-native';
import React from 'react';
import StackNavigator from './navigation/StackNavigator';
import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StackNavigator />
      </View>
    </Provider>
  );
}

export default App;
AppRegistry.registerComponent('Broz', () => App);
