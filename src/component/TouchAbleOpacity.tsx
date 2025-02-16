import { StyleSheet, Text, View, TouchableOpacity as RNTouchableOpacity } from 'react-native';
import React from 'react';

interface IProps {
  componentId: string;
  ontouch:string;
  text:string;
}

const CustomTouchableOpacity = (props: IProps) => {
  return (
    <View>
      <RNTouchableOpacity style={styles.Touchable} onPress={props.ontouch}>
        <Text>{props.text}</Text>
      </RNTouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Touchable: {
    height: 40,
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 10,
    borderWidth: 0.5,
    borderColor: "#646464",
    borderRadius: 10,
  },
});

export default CustomTouchableOpacity;
