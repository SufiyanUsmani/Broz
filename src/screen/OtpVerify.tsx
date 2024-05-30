import { StyleSheet, TouchableOpacity, Text, SafeAreaView, Alert, Appearance } from 'react-native';
import React, { useState, useEffect } from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';

type OtpVerifyProps = {
  navigation: any; // You might want to replace 'any' with the specific navigation prop type
};

const OtpVerify: React.FC<OtpVerifyProps> = ({ navigation }) => {
  const [theme, setTheme] = useState<string>("");
  const [timer, setTimer] = useState<number>(30);

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme === "dark") {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    });
    return () => {
      listener.remove();
    };
  }, []);

  useEffect(() => {
    const myInterval = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => {
      if (typeof myInterval === 'number') {
        clearInterval(myInterval);
      }
    };
  }, [timer]);

  const resendOtp = async () => {
    // let data = { "phoneNo": props.mobileNumber, }
    // let res = await LoginCollection.otpSend(data);
    setTimer(30);
    if (true) { // Replace 'true' with your condition for successful OTP resend
      Alert.alert('Otp sent successfully');
    } else {
      Alert.alert('OTP not sent');
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: theme === "light" ? "#d9d9d9" : "#222831" , flex: 1 }}>
      <Text style={[styles.F24, { color: theme === "light" ? "#2A4C54" : "#d3d3d3" }]}>Enter the 4-digit OTP</Text>
      <OTPInputView
        style={{ width: '80%', height: 100, marginHorizontal: "10%" }}
        pinCount={4}
        autoFocusOnLoad
        keyboardType="number-pad"
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => { console.log(`Code is ${code}, you are good to go!`); }}
      />
      {timer === 0 ? (
        <TouchableOpacity onPress={resendOtp}>
          <Text style={[styles.F14, { color: theme === "light" ? "#2A4C54" : "#d3d3d3" }]}>Resend OTP</Text>
        </TouchableOpacity>
      ) : (
        <Text style={{ marginLeft: "5%", color: theme === "light" ? "#2A4C54" : "#d3d3d3" }}>You Can Resend OTP in: {timer} Seconds</Text>
      )}
      <TouchableOpacity style={[styles.Touchable, styles.JACenter]} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.WhiteF16B}>Otp Verify</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  F24: { fontSize: 24, fontWeight: "600", marginLeft: "5%" },
  F14: { fontSize: 14, fontWeight: "600", marginLeft: "5%" },
  underlineStyleBase: { width: 50, height: 50, borderWidth: 1, borderBottomWidth: 1, borderRadius: 8, borderColor: "#646464" },
  underlineStyleHighLighted: { borderColor: "#000" },
  JACenter: { justifyContent: "center", alignItems: "center" },
  WhiteF16B: { color: "#d3d3d3", fontSize: 16, fontWeight: "700" },
  Touchable: { height: 45, width: "90%", marginHorizontal: "5%", marginVertical: 10, padding: 10, borderWidth: 0.5, borderColor: "#646464", borderRadius: 10, backgroundColor: "#2A4C54" },
});

export default OtpVerify;
