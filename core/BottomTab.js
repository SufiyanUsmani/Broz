import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from "react-native-vector-icons/";

const BottomTab = () => {
    return (
        <View style={styles.mainView}>
            <TouchableOpacity>
                {/* <FontAwesome name="user-circle" size={20}/> */}
            </TouchableOpacity>
            <TouchableOpacity>
                {/* <Ionicons name="settings-outline" size={20}/> */}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: "#fff", borderTopWidth: 0.3, borderTopColor: "#646464", position: 'absolute', width: '100%', bottom: 0,
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        paddingHorizontal: '6%', paddingVertical: Platform.OS == 'ios' ? '5%' : '3%',
    }
})
export default BottomTab;