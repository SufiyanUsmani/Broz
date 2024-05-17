import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

const BottomTab = ({ navigation }) => {
    return (
        <View style={styles.mainView}>
            <TouchableOpacity>
                <Ionicons name="home-outline" size={26} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="bag-outline" size={26} />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome name="plus-square-o" size={28} />
            </TouchableOpacity>
            {/* <TouchableOpacity>
                <Ionicons name="settings-outline" size={26} />
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
                <FontAwesome name="user-o" size={26} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: "#d3d3d3", position: 'absolute', width: '90%', marginHorizontal: "5%", bottom: 20,
        borderRadius: 12,
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        paddingHorizontal: '10%', paddingVertical: Platform.OS == 'ios' ? '4%' : '3%',
    }
})
export default BottomTab;