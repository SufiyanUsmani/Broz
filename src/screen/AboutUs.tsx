import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const AboutUs = () => {
  return (
    <SafeAreaView>
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.companyName}>Crackdown Pvt. Ltd.</Text>
        <Text style={styles.appName}>Bro'z</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>Welcome to Bro'z, your one-stop shop for all mobile accessories, crafted and brought to you by Crackdown Pvt. Ltd. Our platform is dedicated to offering the best quality mobile accessories, ensuring your devices are always stylish, protected, and fully equipped.</Text>
        <Text style={styles.description}>At Crackdown Pvt. Ltd., we understand the importance of your mobile devices in everyday life. That's why we've curated a selection of accessories that not only enhance the look of your device but also boost its functionality. From protective cases to the latest in mobile tech, we've got everything you need.</Text>
        <Text style={styles.description}>We pride ourselves on delivering top-notch customer service and ensuring that your shopping experience is smooth and enjoyable. Bro'z is more than just a marketplace—it's a community of tech enthusiasts who share a love for quality and innovation.</Text>
        <Text style={styles.description}>Thank you for choosing Bro'z. We're here to make sure you have the best accessories for your mobile life. If you have any questions, suggestions, or need assistance, don't hesitate to reach out. We're always here to help!</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flexGrow: 1,padding: 20,backgroundColor: '#f9f9f9',},
  header: {marginBottom: 20,},
  companyName: {fontSize: 24,fontWeight: 'bold',textAlign: 'center',marginBottom: 10,},
  appName: {fontSize: 20,textAlign: 'center',color: '#555',},
  content: {marginTop: 20,},
  description: {fontSize: 16,lineHeight: 24,marginBottom: 15,color: '#000',textAlign:"justify"},
});

export default AboutUs;
