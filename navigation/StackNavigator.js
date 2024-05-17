import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../src/screen/SplashScreen';
import HomeScreen from '../src/screen/HomeScreen';
import Login from '../src/screen/Login';
import OtpVerify from '../src/screen/OtpVerify';
import BottomTab from '../core/BottomTab';
import Privacy from '../src/screen/Privacy';
import Terms from '../src/screen/Terms';
import MyProfile from '../src/screen/MyProfile';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OtpVerify" component={OtpVerify} options={{ headerShown: false }} />
        <Stack.Screen name="BottomTab" component={BottomTab}/>
        <Stack.Screen name='Privacy' component={Privacy} options={{ headerShown: false }}/>
        <Stack.Screen name='Terms' component={Terms} options={{ headerShown: false }}/>
        <Stack.Screen name='MyProfile' component={MyProfile} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator;  