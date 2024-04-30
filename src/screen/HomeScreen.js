import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomTab from '../../core/BottomTab';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: "#ffffff",flex:1 }}>
            <View style={{ flexDirection: "row", height: 50, justifyContent: "space-between", borderBottomColor: "#646464", borderBottomWidth: 0.3,}}>
                <Image style={{ height: 48, width: 250, marginHorizontal: 10 }} source={require('../../res/Headerimg.png')} />
                <Ionicons name="settings-outline" size={24} style={{margin:10}}/>
            </View>
            <ScrollView>
                <Image style={{ height: 450, width: "96%", margin: "2%", borderRadius: 15 }} source={require('../../res/head1.jpeg')} />
                <TouchableOpacity style={[styles.Touchable, styles.JACenter]}>
                    <Text style={styles.BuyNow}>Buy Now</Text>
                </TouchableOpacity>
                <Image style={{ height: 450, width: "96%", margin: "2%", borderRadius: 15 }} source={require('../../res/Head2.jpeg')} />
                <TouchableOpacity style={[styles.Touchable, styles.JACenter]}>
                    <Text style={styles.BuyNow}>Buy Now</Text>
                </TouchableOpacity>
                <Image style={{ height: 450, width: "96%", margin: "2%", borderRadius: 15 }} source={require('../../res/Head3.jpeg')} resizeMode='cover' />
                <TouchableOpacity style={[styles.Touchable, styles.JACenter]}>
                    <Text style={styles.BuyNow}>Buy Now</Text>
                </TouchableOpacity>
            </ScrollView>
            <BottomTab style={{height:50}}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    JACenter: { justifyContent: "center", alignItems: "center" },
    BuyNow: { color: "#fff", fontSize: 16, fontWeight: "600" },
    Touchable: { height: 45, width: "90%", marginHorizontal: "5%", marginVertical: 10, backgroundColor: "#2A4C54", borderRadius: 10, }
});
export default HomeScreen;