import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const Privacy = ({ navigation }) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView style={{ paddingHorizontal: 10,marginVertical:15}}>
                <Text style={styles.F14}>{"   "}CrackDown Pvt Ltd ("us", "we", or "our") operates the mobile application "Broz" (the "App"). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the App.</Text>
                <Text style={styles.F14}>{"   "}We use your Personal Information only for providing and improving the App. By using the App, you agree to the collection and use of information in accordance with this policy.</Text>

                <Text style={styles.F18B}>Information Collection and Use :</Text>
                <Text style={styles.F14}>{"   "}While using our App, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, email address, postal address, and phone number ("Personal Information").</Text>

                <Text style={styles.F18B}>Log Data :</Text>
                <Text style={styles.F14}>{"   "}Like many app operators, we collect information that your browser sends whenever you use our App ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our App that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</Text>

                <Text style={styles.F18B}>Communications :</Text>
                <Text style={styles.F14}>{"   "}We may use your Personal Information to contact you with newsletters, marketing, or promotional materials and other information that pertains to our services.</Text>

                <Text style={styles.F18B}>Cookies :</Text>
                <Text style={styles.F14}>{"   "}Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.</Text>

                <Text style={styles.F18B}>Security :</Text>
                <Text style={styles.F14}>{"   "}The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</Text>

                <Text style={styles.F18B}>Changes to This Privacy Policy :</Text>
                <Text style={styles.F14}>{"   "}This Privacy Policy is effective as of [date] and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.</Text>
                <Text style={styles.F14}>{"   "}We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</Text>

                <Text style={styles.F18B}>Contact Us :</Text>
                <Text style={styles.F14}>{"   "}If you have any questions about this Privacy Policy, please contact us at [contact email].</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    F14:{ fontSize: 14 },
    F18B: { fontSize: 18, fontWeight: "600", marginVertical: "3%" },
})
export default Privacy;