import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

interface SplashScreenProps {
    navigation: any; // You can replace 'any' with the specific type of navigation prop if available
}

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => { navigation.navigate('HomeScreen'); }, 5000);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={{ flex: 1, backgroundColor: "#d9d9d9", justifyContent: "center", alignItems: "center" }}>
            <Image style={styles.image} source={require('../../res/Splashicon.png')} />
            <View style={{ flexDirection: "row", bottom: -220 }}>
                <Text style={{ color: "#2A4C54", fontSize: 18 }}>Powered by:</Text>
                <Text style={{ color: "#2A4C54", fontSize: 18, fontWeight: "700" }}> CrackDown</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: { width: 150, height: 150, borderRadius: 15, resizeMode: 'cover' },
});

export default SplashScreen;
