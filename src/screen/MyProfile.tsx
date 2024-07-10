import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Appearance, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationProp } from '@react-navigation/native';

type MyProfileProps = {
  navigation: NavigationProp<any>;
};

const MyProfile: React.FC<MyProfileProps> = ({ navigation }) => {
  const [theme, setTheme] = useState<string>(Appearance.getColorScheme() || 'light');

  useEffect(() => {
    const listener = ({ colorScheme }: { colorScheme: string }) => {
      setTheme(colorScheme === 'dark' ? 'dark' : 'light');
    };
    Appearance.addChangeListener(listener);
    return () => {
      Appearance.removeChangeListener(listener);
    };
  }, []);

  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: theme === "light" ? "#d9d9d9" : "#222831" }}>
      <View>
        <Image style={[styles.Image,{  borderColor: theme === "light" ? "#000" : "#fff", }]} source={require("../../res/Splashicon.png")} />
        <Text style={[styles.Ace, { color: theme === "light" ? "#000" : "#fff" }]}>Sufiyan Usmani</Text>
        <Text style={{ alignSelf: "center", color: theme === "light" ? "#000" : "#fff" }}>@usmanisufiyan0755gmail.com</Text>
      </View>
      <TouchableOpacity style={[styles.button, styles.JACenter, { backgroundColor: theme === "light" ? "#2A4C54" : "#d3d3d3" }]}>
        <Text style={[styles.F16B, { color: theme === "light" ? "#d3d3d3" : "#2A4C54" }]}>Your Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.JACenter, { backgroundColor: theme === "light" ? "#2A4C54" : "#d3d3d3" }]}>
        <Text style={[styles.F16B, { color: theme === "light" ? "#d3d3d3" : "#2A4C54" }]}>Your Payments Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.JACenter, { backgroundColor: theme === "light" ? "#2A4C54" : "#d3d3d3" }]} onPress={() => navigation.navigate('ContactUs')}>
        <Text style={[styles.F16B, { color: theme === "light" ? "#d3d3d3" : "#2A4C54" }]}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.JACenter, { backgroundColor: theme === "light" ? "#2A4C54" : "#d3d3d3" }]}>
        <Text style={[styles.F16B, { color: theme === "light" ? "#d3d3d3" : "#2A4C54" }]}>Setting</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.JACenter, { backgroundColor: theme === "light" ? "#2A4C54" : "#d3d3d3" }]} onPress={() => navigation.navigate('Address')}>
        <Text style={[styles.F16B, { color: theme === "light" ? "#d3d3d3" : "#2A4C54" }]}>Address</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.JACenter, { backgroundColor: theme === "light" ? "#2A4C54" : "#d3d3d3" }]} onPress={() => navigation.navigate('AboutUs')}>
        <Text style={[styles.F16B, { color: theme === "light" ? "#d3d3d3" : "#2A4C54" }]}>About Us</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  JACenter: { justifyContent: "center", alignItems: "center" },
  Ace: { alignSelf: "center", marginVertical: 10, fontSize: 22, fontWeight: "600" },
  F16B: { fontSize: 16, fontWeight: "700" },
  Image:{height: 100, width: 100, borderRadius: 100, borderWidth: 1,alignSelf: "center", marginTop: 70},
  button: { marginHorizontal: "10%", marginVertical: "2%", width: "80%", height: 45, borderRadius: 12 },
});

export default MyProfile;
