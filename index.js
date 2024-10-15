const { AppRegistry, View } = require('react-native');
const React = require('react');
const StackNavigator = require('./navigation/StackNavigator').default;
const { Provider } = require('react-redux');
const store = require('./store').default;

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StackNavigator />
      </View>
    </Provider>
  );
}

AppRegistry.registerComponent('Broz', () => App);
module.exports = App;
