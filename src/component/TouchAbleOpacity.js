import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const TouchAbleOpacity = () => {
  return (
    <View>
      <TouchableOpacity style={styles.Touchable}>
        <Text></Text>
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
  Touchable:{height:40,width:"90%",marginHorizontal:"5%",marginVertical:10,padding:10,borderWidth:0.5,borderColor:"#646464",borderRadius:10,}
})
export default TouchAbleOpacity;