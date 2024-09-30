import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Linking, SafeAreaView } from "react-native"
import { COLORS } from '../../constants/theme';
import { TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import SafeAndroidView from '../../constants/SafeAndroidView';

function ContactUs() {

    const [names, setNames] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    async function sendEmail() {

        if(names.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Please fill out all fields!");
            return;
        }

        let url = `mailto:empathy.bytes.vip@gmail.com`;
        const subject = `Empathy Bytes App message from - ${names}`;
        const body = `${message}\n\n Sent from: ${email}`;
        
        url += `?subject=${subject}&body=${body}`;
    
        // check if we can use this link
        const canOpen = await Linking.canOpenURL(url);
    
        if (!canOpen) {
            throw new Error('Provided URL can not be handled');
        }
        return Linking.openURL(url);
    }

    return (
        <SafeAreaView style={[styles.container, SafeAndroidView.AndroidSafeArea]}> 
            <Image
                style={styles.logo}
                source={require('../../assets/empathybytes.png')}
            />
            <View style={styles.textBox}>
                <Text style={styles.title} >Let us know how</Text>
                <Text style={styles.title}>we're doing :)</Text>
            </View>
            <View style={styles.formBox}>
                <TextInput 
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Email...'
                />
                <TextInput 
                    style={styles.input}
                    value={names}
                    onChangeText={setNames}
                    placeholder='Name...'
                />
                <TextInput 
                    style={[styles.input, styles.messageBox]}
                    value={message}
                    onChangeText={setMessage}
                    placeholder='Message...'
                    multiline
                />
                <TouchableOpacity style={styles.submitButton} onPress={sendEmail} >
                    <Text style={styles.submitText} >Submit</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.mediaText}>Or find us on social media!</Text>
            <View style={styles.mediaBox}>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.linkedin.com')}>
                    <Image
                        style={styles.mediaIcons}
                        source={require('../../assets/linkedinin.png')}>
                    </Image>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => Linking.openURL('https://youtube.com/@georgiatechempathybytesvip?si=rSV5f1Cc4B2Bun_b')}>
                    <Image
                        style={styles.mediaIcons}
                        source={require('../../assets/youtube.png')}>
                    </Image>
                </TouchableHighlight>
            </View>
            {/* <TouchableOpacity style={styles.goButton} onPress={() => navigation.navigate('Home')} >
                    <Text  style={styles.goButtonText}>
                        Go Back
                    </Text>
                </TouchableOpacity> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.tertiary
    },
    textBox: {
        margin: 15,
    },
    title: {
        fontSize: 30,
        fontFamily: "Lexend_400Regular",
        textAlign: "center",
    },
    mediaText: {
        margin: 25,
        fontSize: 27,
        fontFamily: "Lexend_400Regular",
        textAlign: "center",
    },
    logo: {
        width: 55,
        height: 55,
        padding: 55,
        margin: 10,
        borderRadius: 100
    },
    text: {
        color: "black",
        textAlign: "center",
        fontSize: 16,
        margin: 20,
        fontFamily: "Lexend_700Bold"
    },
    image: {
        width: 410,
        height: 200,
        marginBottom: 10,
        borderRadius: 50,
    },
    titleText: {
        fontSize: 30,
        color: "white",
        margin: 20,
        fontFamily: "Lexend_700Bold"
    },
    goButton: {
        borderRadius: 40,
        height: 50,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.secondary,
    },
    goButtonText: {
        color: COLORS.tertiary,
        textAlign: "center",
        fontSize: 15,
        fontFamily: "Lexend_700Bold"
    },
    formBox: {
        width: "100%",
        alignItems: "center",
    },
    input: {
        height: 50,
        fontSize: 22,
        fontFamily: "Lexend_400Regular",
        width: "85%",
        margin: 7,
        borderWidth: 1.5,
        borderColor: COLORS.primary,
        borderRadius: 5,
        paddingHorizontal: 15,
    },
    messageBox: {
        height: 225,
        paddingVertical: 10,
        textAlignVertical: "top",
    },
    mediaBox: {
        flexDirection: "row",
        gap: 50,
    },
    mediaIcons: {
        width: 22,
        height: 22,
        padding: 22,
    },
    submitButton: {
        margin: 10,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        width: '85%',
        padding: 5,
    },
    submitText: {
        color: 'white',
        fontSize: 20,
        fontFamily: "Lexend_400Regular",
        textAlign: "center",
    }
})

export default ContactUs;