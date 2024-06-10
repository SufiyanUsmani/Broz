import { Appearance, SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

const Cart: React.FC = () => {
  const [theme, setTheme] = useState<string>(Appearance.getColorScheme() || 'light');

  useEffect(() => {
    const listener = ({ colorScheme }: Appearance.AppearancePreferences) => {
      setTheme(colorScheme === 'dark' ? 'dark' : 'light');
    };
    const subscription = Appearance.addChangeListener(listener);
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: theme === "light" ? "#d3d3d3" : "#222831", flex: 1 }}>
      <View style={{height:40,borderBottomColor:"#646464",borderBottomWidth:0.5}}>
        <Text style={{fontSize:22,fontWeight:"600",marginHorizontal:15}}>Cart</Text>
      </View>
      <ScrollView>
        <View>
          <Image style={{ height: "auto", width: "96%", aspectRatio: 1 / 1.35, margin: "2%", borderRadius: 15 }} source={require("../../res/head1.jpeg")} />
          <Text>Cart</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Cart;

const styles = StyleSheet.create({});
