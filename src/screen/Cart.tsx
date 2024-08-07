import { Appearance, SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
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
          <TouchableOpacity style={[styles.Touchable,styles.JACenter]}>
            <Text style={styles.WhiteF16B}>Payment Proceed</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Cart;

const styles = StyleSheet.create({
  JACenter: { justifyContent: "center", alignItems: "center" },
  WhiteF16B: { color: "#d3d3d3", fontSize: 16, fontWeight: "700" },
  Touchable: { height: 45, width: "90%", marginHorizontal: "5%", marginVertical: 10, padding: 10, borderWidth: 0.5, borderColor: "#646464", borderRadius: 10, backgroundColor: "#2A4C54" },
});
