import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/theme';
import BorderBox from '../../constants/BorderBox';
import BackArrow from '../../constants/BackArrow';
const windowWidth = Dimensions.get('window').width;
const imageHeight = 200;

const devs = [
    {
        name: 'name1',
        role: 'role1',
    },
    {
        name: 'name2',
        role: 'role1',
    },
    {
        name: 'name3',
        role: 'role1',
    },
    {
        name: 'name4',
        role: 'role2',
    },
    {
        name: 'name5',
        role: 'role2',
    },
    {
        name: 'name6',
        role: 'role2',
    },
    {
        name: 'name7',
        role: 'role2',
    },
]

function AboutUs({navigation}) {
    return (
        <View style={styles.container}>
            <Image
                    style={styles.image}
                    source={require('../../assets/teampic.jpeg')}
            />
            <ScrollView>
                <View style={styles.scrollContent}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <View style={styles.backButton}>
                            <Ionicons name="arrow-back-sharp" size={20} color={COLORS.secondary}/>
                            <Text style={{fontSize: 14, color: COLORS.secondary}}>Back to home</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.titleText}>
                        Our Team
                    </Text>
                    <View style={styles.boxGap}>
                        <BorderBox title={"What we do"} 
                            borderColor={COLORS.primary} 
                            titleColor={COLORS.primary} 
                            backgroundColor={COLORS.tertiary} 
                            isCentered={false}
                            style={styles.borderBox}>
                            <Text style={styles.text}>
                                Empathy Bytes VIP explores how multimedia and emerging technologies can enhance empathy and understanding as we create digital scholarship and improve access to resources.
                            </Text> 
                        </BorderBox>
                        {/* The developer bubble encapsulates the developers. Each headshot container view is a different person */}
                        <BorderBox title={"Developers"} 
                            borderColor={COLORS.secondary} 
                            titleColor={COLORS.secondary} 
                            backgroundColor={COLORS.tertiary} 
                            isCentered={false}
                            style={styles.borderBox}>
                            <View style={[styles.outlineBubble, styles.developerBubble]}>
                                {devs.map((dev,i) => {
                                    return (
                                        <View key={i} style={styles.headshotContainer}>
                                            <View style={styles.CircleShapeView}></View>
                                            <Text style={{fontSize: 15, color: COLORS.primary, fontFamily: "Lexend_400Regular"}}>
                                                {dev.name}
                                            </Text>
                                            <Text style={{fontSize: 12, color: COLORS.primary, fontFamily: "Lexend_400Regular"}}>
                                                {dev.role}
                                            </Text>
                                        </View>
                                    )
                                })}
                                {/* <View style={styles.headshotContainer}>
                                    <View style={styles.CircleShapeView}></View>
                                    <Text style={{fontSize: 15, color: COLORS.primary, fontFamily: "Lexend_400Regular"}}>
                                        Name
                                    </Text>
                                    <Text style={{fontSize: 12, color: COLORS.primary, fontFamily: "Lexend_400Regular"}}>
                                        Role
                                    </Text>
                                </View>
                                <View style={styles.headshotContainer}>
                                    <View style={styles.CircleShapeView}></View>
                                    <Text style={{fontSize: 15, color: COLORS.primary, fontFamily: "Lexend_400Regular"}}>
                                        Name
                                    </Text>
                                    <Text style={{fontSize: 12, color: COLORS.primary, fontFamily: "Lexend_400Regular"}}>
                                        Role
                                    </Text>
                                </View>
                                <View style={styles.headshotContainer}>
                                    <View style={styles.CircleShapeView}></View>
                                    <Text style={{fontSize: 15, color: COLORS.primary, fontFamily: "Lexend_400Regular"}}>
                                        Name
                                    </Text>
                                    <Text style={{fontSize: 12, color: COLORS.primary, fontFamily: "Lexend_400Regular"}}>
                                        Role
                                    </Text>
                                </View>
                                <View style={styles.headshotContainer}>
                                    <View style={styles.CircleShapeView}></View>
                                    <Text style={{fontSize: 15, color: COLORS.primary, fontFamily: "Lexend_400Regular"}}>
                                        Name
                                    </Text>
                                    <Text style={{fontSize: 12, color: COLORS.primary, fontFamily: "Lexend_400Regular"}}>
                                        Role
                                    </Text>
                                </View>
                                <View style={styles.headshotContainer}>
                                    <View style={styles.CircleShapeView}></View>
                                    <Text style={{fontSize: 15, color: COLORS.primary, fontFamily: "Lexend_400Regular"}}>
                                        Name
                                    </Text>
                                    <Text style={{fontSize: 12, color: COLORS.primary, fontFamily: "Lexend_400Regular"}}>
                                        Role
                                    </Text>
                                </View>
                                <View style={styles.headshotContainer}>
                                    <View style={styles.CircleShapeView}></View>
                                    <Text style={{fontSize: 15, color: COLORS.primary, fontFamily: "Lexend_400Regular"}}>
                                        Name
                                    </Text>
                                    <Text style={{fontSize: 12, color: COLORS.primary, fontFamily: "Lexend_400Regular"}}>
                                        Role
                                    </Text>
                                </View> */}
                            </View>
                        </BorderBox>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        borderRadius: 10,        
    },
    borderBox: {
        width: '90%',
    },
    scrollContent: {
        flex: 1,
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 30,
        width: windowWidth, 
        backgroundColor: "#FFFBE7", 
        borderRadius: 15,
        marginTop: imageHeight - 10,
    },
    headshotContainer: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    outlineBubble: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
    },
    developerBubble: {
        //height: 500,
        padding: 30,
    },
    titleText: {
        fontSize: 50,
        fontFamily: "Lexend_700Bold",
        color: COLORS.secondary,
        textAlign: "center",
        //fontWeight: 'bold',
        margin: 30,
    },
    captionText: {
        fontSize: 30,
        fontFamily: "Lexend_700Bold",
        color: COLORS.primary,
        zIndex: 1,
        position: 'absolute',
        top: -27,
        left: 20,
    },
    text: {
        color: COLORS.primary,
        textAlign: "left",
        margin: 20,
        fontFamily: "Lexend_400Regular",
    },
    backText: {
        color: COLORS.secondary,
        textAlign: "left",
        fontFamily: "Lexend_400Regular",
        marginTop: 10,

    },
    CircleShapeView: {
        //To make Circle Shape
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: COLORS.primary,
    },
    image: {
        height: imageHeight,
        width: windowWidth,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    /*colorGold: {
        color: "#B3A369",
        borderColor: "#B3A369",
    },
    colorBlue: {
        color: "#193054",
        borderColor: "#193054",
    },*/
    boxGap: {
        gap: 20,
        alignItems: 'center',
    },
    backButton: {
        position: "absolute",
        left: -170,
        MarginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
        color: COLORS.secondary,
    }
})

export default AboutUs;