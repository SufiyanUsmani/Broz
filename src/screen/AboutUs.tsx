import React from 'react';
import { StyleSheet, Text, SafeAreaView, ViewStyle, TextStyle } from 'react-native';

const AboutUs: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>About Us</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create<{
  container: ViewStyle;
  text: TextStyle;
}>({
  container: {flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#f8f8f8',},
  text: {fontSize: 18,color: '#333',},
});

export default AboutUs;
