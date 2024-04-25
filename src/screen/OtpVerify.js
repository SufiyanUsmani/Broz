import { StyleSheet, TextInput, View, TouchableOpacity, Text, SafeAreaView,Alert } from 'react-native'
import React, { useState, useEffect } from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OtpVerify = ({ navigation }) => {
  const [timer, setTimer] = useState(30);
  useEffect(() => {
    const myInterval = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => { if (typeof myInterval === 'number') { clearInterval(myInterval); } };
  }, [timer]);
  const resendOtp = async () => {
    // let data = { "phoneNo": props.mobileNumber, }
    // let res = await LoginCollection.otpSend(data);
    setTimer(30);
    if (res.message == 'Otp sent successfully.') {
      Alert.alert('Otp sent sucessfully')
    } else { Alert.alert('otp not send') }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: "600",marginLeft:"5%" }}>Enter the 4-digit OTP</Text>
      
      <OTPInputView style={{ width: '80%', height: 100, marginHorizontal: "10%", }} pinCount={4}
        autoFocusOnLoad
        keyboardType="number-pad"
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code => { console.log(`Code is ${code}, you are good to go!`) })} />
      {timer == 0 ?
        <TouchableOpacity onPress={() => resendOtp()}>
          <Text style={styles.F14}>Resend otp</Text>
        </TouchableOpacity> :
        <Text style={{marginLeft: "5%" }}>You Can Resend OTP in: {timer} Seconds</Text>}

      <TouchableOpacity style={[styles.Touchable, styles.JACenter]} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.WhiteF16B}>otp Verify</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default OtpVerify

const styles = StyleSheet.create({
  F14: { color: "#2A4C54", fontSize: 14, fontWeight: "600", marginLeft: "5%" },
  underlineStyleBase: { width: 50, height: 50, borderWidth: 1, borderBottomWidth: 1, borderRadius: 8, borderColor: "#646464", },
  underlineStyleHighLighted: { borderColor: "#000", },
  JACenter: { justifyContent: "center", alignItems: "center" },
  WhiteF16B: { color: "#fff", fontSize: 16, fontWeight: "700" },
  Touchable: { height: 45, width: "90%", marginHorizontal: "5%", marginVertical: 10, padding: 10, borderWidth: 0.5, borderColor: "#646464", borderRadius: 10, backgroundColor: "#2A4C54" },
})