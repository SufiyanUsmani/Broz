import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BottomTab from '../../core/BottomTab';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
    const [search, setSearch] = useState(false);
    return (
        <SafeAreaView style={styles.BCF}>
            <View style={styles.ZZXX}>
                {/* <Image style={styles.H48} source={require('../../res/Headerimg.jpeg')} /> */}
                <Text style={{fontSize:24,fontWeight:"700",color:"#2A4C54",margin:10}}>Broz</Text>
                <TouchableOpacity onPress={() => setSearch(!search)}>
                    <Ionicons name="search-outline" size={26} style={{ margin: 10 }} />
                </TouchableOpacity>
            </View>
            {!search && <View style={styles.H50}>
                <TextInput style={styles.BCD3} placeholder='Search Here...' placeholderTextColor={"#000"}/>
            </View>}
            <ScrollView>
                <Image style={styles.H450} source={require('../../res/head1.jpeg')} />
                <TouchableOpacity style={[styles.Touchable, styles.JACenter]}>
                    <Text style={styles.BuyNow}>Buy Now</Text>
                </TouchableOpacity>
                <Image style={styles.H450} source={require('../../res/Head2.jpeg')} />
                <TouchableOpacity style={[styles.Touchable, styles.JACenter]}>
                    <Text style={styles.BuyNow}>Buy Now</Text>
                </TouchableOpacity>
                <Image style={styles.H450} source={require('../../res/Head3.jpeg')} resizeMode='cover' />
                <TouchableOpacity style={[styles.Touchable, styles.JACenter]}>
                    <Text style={styles.BuyNow}>Buy Now</Text>
                </TouchableOpacity>
            </ScrollView>
            {/* <BottomTab style={styles.H50} /> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    H50: { height: 50 },
   H48: { height: 48, width: 250, marginHorizontal: 10 },
    JACenter: { justifyContent: "center", alignItems: "center" },
    BuyNow: { color: "#fff", fontSize: 16, fontWeight: "600" },
    BCF: { backgroundColor: "#ffffff", flex: 1 },
    H450: { height: 450, width: "96%", margin: "2%", borderRadius: 15 },
    ZZXX:{ flexDirection: "row", height: 50, justifyContent: "space-between", borderBottomColor: "#646464", borderBottomWidth: 0.3, },
    BCD3: { borderWidth: 0.3, backgroundColor: "#d3d3d3", padding: 10, marginHorizontal: 10, marginVertical: 5, borderRadius: 12 },
    Touchable: { height: 45, width: "90%", marginHorizontal: "5%", marginVertical: 10, backgroundColor: "#2A4C54", borderRadius: 10, }
});
export default HomeScreen;