import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native'
import React from 'react'

const Terms = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{height:50,borderBottomColor:"#646464",borderBottomWidth:0.5}}>
                <Text style={{fontSize:20,fontWeight:"600",margin:10}}>Term's & Conditions</Text>
            </View>
            <ScrollView style={{ paddingHorizontal: 10,  }}>
                <Text style={styles.F14}>{"     "}These Terms and Conditions ("Terms") govern your use of the mobile application "Broz" (the "App") operated by CrackDown Pvt Ltd ("us", "we", or "our").</Text>
                <Text style={styles.F14}>{"     "}By accessing or using the App, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the App.</Text>

                <Text style={styles.F18B}>Account Registration :</Text>
                <Text style={styles.F14}>{"     "}When you create an account with us, you must provide accurate, complete, and current information. You are solely responsible for maintaining the confidentiality of your account and password and for restricting access to your device. You agree to accept responsibility for all activities that occur under your account or password.</Text>

                <Text style={styles.F18B}>Intellectual Property :</Text>
                <Text style={styles.F14}>{"     "}The App and its original content, features, and functionality are owned by CrackDown Pvt Ltd and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</Text>

                <Text style={styles.F18B}>Content :</Text>
                <Text style={styles.F14}>{"     "}Our App may allow you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the App.</Text>

                <Text style={styles.F18B}>Links to Other Websites :</Text>
                <Text style={styles.F14}>{"     "}Our App may contain links to third-party websites or services that are not owned or controlled by CrackDown Pvt Ltd. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.</Text>

                <Text style={styles.F18B}>Termination :</Text>
                <Text style={styles.F14}>{"     "}We may terminate or suspend access to our App immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</Text>

                <Text style={styles.F18B}>Disclaimer :</Text>
                <Text style={styles.F14}>{"     "}Your use of the App is at your sole risk. The App is provided on an "AS IS" and "AS AVAILABLE" basis. The App is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.</Text>

                <Text style={styles.F18B}>Governing Law :</Text>
                <Text style={styles.F14}>{"     "}These Terms shall be governed and construed in accordance with the laws of [your country], without regard to its conflict of law provisions.</Text>

                <Text style={styles.F18B}>Changes :</Text>
                <Text style={styles.F14}>{"     "}We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</Text>

                <Text style={styles.F18B}>Contact Us :</Text>
                <Text style={styles.F14}>{"     "}If you have any questions about these Terms, please contact us at [contact email].</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    F14: { fontSize: 14 },
    F18B: { fontSize: 18, fontWeight: "600", marginVertical: "3%" },
})
export default Terms;