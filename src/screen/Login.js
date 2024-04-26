import { Image, StyleSheet, TextInput, View, TouchableOpacity, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#d9d9d9", }}>
      <TouchableOpacity style={[styles.Skip, styles.JACenter]}>
        <Text>Skip</Text>
      </TouchableOpacity>
      <View style={{ alignItems: "center" }}>
        <Image style={styles.image} source={require('../../res/Splashicon.png')} />
        <TextInput style={styles.Input} placeholder='Enter Your Phone Number' placeholderTextColor={"#000"} />
        <TouchableOpacity style={[styles.Touchable, styles.JACenter]} onPress={()=>navigation.navigate('OtpVerify')}>
          <Text style={styles.WhiteF16B}>Next</Text>
        </TouchableOpacity>
        <Text>By entering your number your're agreeing to our</Text>
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={()=>navigation.navigate("Terms")}><Text style={styles.BlueF14}>Terms of Service</Text></TouchableOpacity>
          <Text> and </Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Privacy")}><Text style={styles.BlueF14}>Privacy Policy</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  BlueF14:{color:"rgb(13, 110, 253)",fontSize:14,},
  Skip: { height: 40, width: 90, paddingHorizontal: 10, backgroundColor: "#d3d3d3", borderRadius: 20, borderColor: "#646464", borderWidth: 0.5, top: 50, alignSelf: "flex-end", left: -25 },
  Touchable: { height: 45, width: "90%", marginHorizontal: "5%", marginVertical: 10, padding: 10, borderWidth: 0.5, borderColor: "#646464", borderRadius: 10, backgroundColor: "#2A4C54" },
  image: { width: 150, height: 150, borderRadius: 15, resizeMode: 'cover', marginTop: 200, marginBottom: 20 },
  Input: { height: 45, width: "90%", marginHorizontal: "5%", marginVertical: 10, paddingHorizontal: 10, backgroundColor: "#d3d3d3", borderRadius: 10, borderColor: "#646464", borderWidth: 0.5 },
  JACenter: { justifyContent: "center", alignItems: "center" },
  WhiteF16B: { color: "#fff", fontSize: 16, fontWeight: "700" }
})
export default Login;