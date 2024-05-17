import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Appearance } from 'react-native'
import React, { useState, useEffect } from 'react'

const MyProfile = ({ navigation }) => {
    const [theme, setTheme] = useState("");
    useEffect(() => {
        const listener = Appearance.addChangeListener(({ colorScheme }) => {
            if (colorScheme === "dark") {
                setTheme('dark');
            } else { setTheme('light'); }
        });
        return () => { listener.remove(); };
    }, []);

    return (
        <SafeAreaView style={{height:"100%", backgroundColor: theme === "light" ? "#d9d9d9" : "#000" }}>
            <View>
                <View style={{ height: 100, width: 100, borderRadius: 100, borderWidth: 1,borderColor:theme === "light" ?  "#000":"#fff" , alignSelf: "center", marginTop: 70 }}></View>
                <Text style={[styles.Ace, { color: theme === "light" ?  "#000":"#fff" }]}>Sufiyan Usmani</Text>
                <Text style={{ alignSelf: "center",color: theme === "light" ?  "#000":"#fff"  }}>@usmanisufiyan0755gmail.com</Text>
            </View>
            <TouchableOpacity style={[styles.button, styles.JACenter,{ backgroundColor: theme === "light" ?  "#2A4C54": "#d3d3d3", }]}>
                <Text style={[styles.F16B,{ color: theme === "light" ?  "#d3d3d3": "#2A4C54",}]}>Your Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.JACenter,{ backgroundColor: theme === "light" ?  "#2A4C54": "#d3d3d3", }]}>
                <Text style={[styles.F16B,{ color: theme === "light" ?  "#d3d3d3": "#2A4C54",}]}>Your Payments Detail</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    JACenter: { justifyContent: "center", alignItems: "center" },
    Ace: { alignSelf: "center", marginVertical: 10, fontSize: 22, fontWeight: "600" },
    F16B:{fontSize:16,fontWeight:"700",},
    button: { marginHorizontal: "10%", marginVertical: "2%", width: "80%", height: 45,borderRadius: 12, }
})
export default MyProfile;