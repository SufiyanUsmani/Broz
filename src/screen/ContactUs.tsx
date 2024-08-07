import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, SafeAreaView, ScrollView } from 'react-native';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }
    // Send the message to the company's email or API endpoint
    Alert.alert('Thank You', 'Your message has been sent');
  };

  return (
    <SafeAreaView>
      <View style={{height:50,backgroundColor:"lightgrey"}}>
      <Text style={styles.title}>Contact Us</Text>
      </View>
      <ScrollView>
        <Text style={styles.description}>
          Thank you for reaching out to Broz. We value your feedback and are here to assist you with any questions or concerns you may have. Please fill out the form below, and a representative from Crackdown Pvt Ltd will get back to you shortly.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Message"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: 'bold',margin:10 },
  input: { height: 45, borderColor: 'black', borderWidth: 1, margin: 10, paddingHorizontal: 10, borderRadius: 12, },
  description: {fontSize: 16,marginBottom: 20,textAlign: 'center',paddingHorizontal:10},
});

export default ContactUs;
