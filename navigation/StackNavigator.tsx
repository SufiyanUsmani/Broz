import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from '../src/screen/SplashScreen';
import HomeScreen from '../src/screen/HomeScreen';
import Login from '../src/screen/Login';
import OtpVerify from '../src/screen/OtpVerify';
import Privacy from '../src/screen/Privacy';
import Terms from '../src/screen/Terms';
import MyProfile from '../src/screen/MyProfile';
import Cart from '../src/screen/Cart';
import ProductInfo from '../src/screen/ProductInfo';
import ProductItems from '../src/component/ProductItems';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import ContactUs from '../src/screen/ContactUs';
import Address from '../src/screen/Address';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: "Home", headerShown: false, tabBarIcon: ({ focused }) => (
            focused ? (<FontAwesome name="home" size={26} color="#2A4C54" />) : (<Ionicons name="home-outline" size={26} color="#646464" />)
          )
        }} />
        <Tab.Screen name="Cart" component={Cart} options={{
          tabBarLabel: "Cart", headerShown: false, tabBarIcon: ({ focused }) => (
            focused ? (<Ionicons name="cart" size={26} color="#2A4C54" />) : (<Ionicons name="cart-outline" size={26} color="#646464" />)
          )
        }} />
        {/* <Tab.Screen name="Category" component={HomeScreen} options={{
          tabBarLabel: "Category", headerShown: false, tabBarIcon: ({ focused }) => (
            focused ? (<AntDesign name="pluscircle" size={26} />) : (<AntDesign name="pluscircleo" size={26} />)
          )
        }} /> */}
        <Tab.Screen name="MyProfile" component={MyProfile} options={{
          tabBarLabel: "MyProfile", headerShown: false, tabBarIcon: ({ focused }) => (
            focused ? (<Ionicons name="person" size={26} color="#2A4C54" />) : (<Ionicons name="person-outline" size={26} color="#646464" />)
          )
        }} />
      </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} /> */}
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={BottomTabs} options={{ headerShown: false }} />
        <Stack.Screen name="OtpVerify" component={OtpVerify} options={{ headerShown: false }} />
        <Stack.Screen name='Privacy' component={Privacy} options={{ headerShown: false }} />
        <Stack.Screen name='Terms' component={Terms} options={{ headerShown: false }} />
        <Stack.Screen name='MyProfile' component={MyProfile} options={{ headerShown: false }} />
        <Stack.Screen name='Cart' component={Cart} options={{ headerShown: false }} />
       <Stack.Screen name='ProductInfo' component={ProductInfo} options={{ headerShown: false }}/>
       <Stack.Screen name='ContactUs' component={ContactUs} options={{ headerShown: false }}/>
       <Stack.Screen name='Address' component={Address} options={{ headerShown: false }}/>
        {/* <Stack.Screen name='ProductItems' component={ProductItems} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen
          name='ProductItems'
          component={() => <ProductItems item={} />}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator;  