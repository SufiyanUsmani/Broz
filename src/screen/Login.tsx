import { Image, StyleSheet, TextInput, View, TouchableOpacity, Text, SafeAreaView, Appearance, Alert, KeyboardAvoidingView } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationProp } from '@react-navigation/native';

type LoginProps = {
  navigation: NavigationProp<any>;
};

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [theme, setTheme] = useState<string>("");
  const [phone, setPhone] = useState<string>('');

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme === "dark") {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    });
    return () => {listener.remove();};
  }, []);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {navigation.navigate("HomeScreen");}
      } catch (err) {console.log("error message", err);}
    };
    checkLoginStatus();
  }, []);

  const handleRegister = () => {
    if (!phone) {
      Alert.alert("Validation Error", "Phone number is required");
      return;
    }
    const user = { phone: phone };
    console.log(user, "user");
    axios.post("http://localhost:800/register", user)
      .then((response) => {
        Alert.alert("Registration Successful", "You have registered successfully");
        setPhone("");
        navigation.navigate('OtpVerify');
      })
      .catch((error) => {
        Alert.alert("Registration Error", "An error occurred during registration");
        console.log("Registration failed", error);
      });
  };

  const skip = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme === "light" ? "#d9d9d9" : "#000" }}>
      <TouchableOpacity style={[styles.Skip, styles.JACenter]} onPress={skip}>
        <Text>Skip</Text>
      </TouchableOpacity>
      <View style={{ alignItems: "center" }}>
        <Image style={styles.image} source={require('../../res/Splashicon.png')} />
        <TextInput
          style={styles.Input}
          placeholder='Enter Your phone Number'
          placeholderTextColor={"#000"}
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
        <TouchableOpacity style={[styles.Touchable, styles.JACenter]} onPress={handleRegister}>
          <Text style={styles.WhiteF16B}>Next</Text>
        </TouchableOpacity>
        <Text style={{ color: theme === "light" ? "#000" : "#d9d9d9" }}>By entering your number you're agreeing to our</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Terms")}><Text style={styles.BlueF14}>Terms of Service</Text></TouchableOpacity>
          <Text style={{ color: theme === "light" ? "#000" : "#d9d9d9" }}> and </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Privacy")}><Text style={styles.BlueF14}>Privacy Policy</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  BlueF14: { color: "rgb(13, 110, 253)", fontSize: 14 },
  Skip: { height: 40, width: 90, paddingHorizontal: 10, backgroundColor: "#d3d3d3", borderRadius: 20, borderColor: "#646464", borderWidth: 0.5, top: 50, alignSelf: "flex-end", left: -25 },
  Touchable: { height: 45, width: "90%", marginHorizontal: "5%", marginVertical: 10, padding: 10, borderWidth: 0.5, borderColor: "#646464", borderRadius: 10, backgroundColor: "#2A4C54" },
  image: { width: 150, height: 150, borderRadius: 15, resizeMode: 'cover', marginTop: 100, marginBottom: 20 },
  Input: { height: 45, width: "90%", marginHorizontal: "5%", marginVertical: 10, paddingHorizontal: 10, backgroundColor: "#d3d3d3", borderRadius: 10, borderColor: "#646464", borderWidth: 0.5 },
  JACenter: { justifyContent: "center", alignItems: "center" },
  WhiteF16B: { color: "#fff", fontSize: 16, fontWeight: "700" }
});

export default Login;
