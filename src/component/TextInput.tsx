import { StyleSheet, View, TextInput as RNTextInput } from 'react-native';
import React from 'react';

const CustomTextInput = () => {
  return (
    <View>
     <RNTextInput style={styles.Input}/>
    </View>
  );
};

const styles = StyleSheet.create({
  Input: { 
    height: 45, 
    width: "90%", 
    marginHorizontal: "5%", 
    marginVertical: 10,
    paddingHorizontal: 10, 
    backgroundColor: "#646464", 
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 0.5
  },
});

export default CustomTextInput;
