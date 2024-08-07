import React from 'react';
import { View, TextInput, StyleSheet, Text, SafeAreaView, Alert, Button } from 'react-native';

type AddressProps = {
  street: string;
  area: string;
  city: string;
  state: string;
  zip: string;
  onChange: (field: string, value: string) => void;
};

const Address: React.FC<AddressProps> = ({ street, area, city, state, zip, onChange }) => {
  const handleSubmit = () => {
    if (!street || !area || !city || !state || !zip) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }
    // Send the message to the company's email or API endpoint
    Alert.alert('Thank You', 'Your message has been sent');
  };
  return (
    <SafeAreaView>

      <View style={{ height: 50, backgroundColor: "lightgrey" }}>
        <Text style={{ fontSize: 26, fontWeight: "bold", margin: 10 }}>Address</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Street</Text>
        <TextInput
          style={styles.input}
          value={street}
          onChangeText={(text) => onChange('street', text)}
          placeholder="Street"
        />

        <Text style={styles.label}>Area</Text>
        <TextInput
          style={styles.input}
          value={area}
          onChangeText={(text) => onChange('area', text)}
          placeholder="Area"
        />

        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={(text) => onChange('city', text)}
          placeholder="City"
        />

        <Text style={styles.label}>State</Text>
        <TextInput
          style={styles.input}
          value={state}
          onChangeText={(text) => onChange('state', text)}
          placeholder="State"
        />

        <Text style={styles.label}>Zip</Text>
        <TextInput
          style={styles.input}
          value={zip}
          onChangeText={(text) => onChange('zip', text)}
          placeholder="Zip Code"
          keyboardType="numeric"
        />
        <Button title="Save" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Address;
