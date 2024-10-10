import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native"
import { COLORS } from "../../constants/theme"
import { teamData } from '../../constants/teamsData';
import BorderBox from '../../constants/BorderBox';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { fb_app, fb_storage } from '../../firebaseConfig';

function IndividualTeam({ navigation, route }) {
    const { team, id, teamPic } = route.params;
    //if screen is app or web team page: render FlatList of description section, tech stack section, and dev section
    if (id == 1 || id === 2) {
        return (
            <View style={styles.container}>
                <FlatList style={styles.flatList}
                    data={teamData[id - 1].description}
                    renderItem={({item}) => <Section id={item.id} text={item.text} teamPic={teamPic} title={item.name} techStackImages={item.techStackImages} developers={item.developers} titleColor={COLORS.tertiary} borderColor={COLORS.tertiary} backgroundColor={COLORS.primary}/>}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={
                        <View style={styles.separator}/>
                    }
                    >
                </FlatList>
            </View>
        )
    //Section will have to be different
    //if screen is vr/ar screen
    //TODO add way to integrate the 3d objects
    } else if (id == 3) {
        return (
            <View style={styles.container}>
                <FlatList style={styles.flatList}
                    data={teamData[id - 1].description}
                    renderItem={({item}) => <Section id={item.id} text={item.text} teamPic={teamPic} title={item.name} techStackImages={item.techStackImages} developers={item.developers} titleColor={COLORS.tertiary} borderColor={COLORS.tertiary} backgroundColor={COLORS.primary}/>}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={
                        <View style={styles.separator}/>
                    }>
                </FlatList>
            </View>
        )
    //Section will have to be different
    //if screen is media screen
    //TODO add way to embed youtube video
    } else if (id == 4) {
        return (
            <View style={styles.container}>
                <FlatList style={styles.flatList}
                    data={teamData[id - 1].description}
                    renderItem={({item}) => <Section id={item.id} text={item.text} title={item.name} techStackImages={item.techStackImages} developers={item.developers} teamPic={teamPic} titleColor={COLORS.tertiary} borderColor={COLORS.tertiary} backgroundColor={COLORS.primary}/>}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={
                        <View style={styles.separator}/>
                    }
                    >
                </FlatList>
            </View>
        )
    }
}

//TODO styling + changing it depending on the screen
const Section = (props) => {
    if (props.id == 0) {
        return (
            <BorderBox title={props.title}
            titleColor={props.titleColor}
            borderColor={props.borderColor}
            backgroundColor={props.backgroundColor}
            isCentered={true}>
                <View style={styles.imageContainer}>
                    <Image style={styles.teamImage} source={props.teamPic ? props.teamPic : null} />
                </View>
            </BorderBox>
        )
    } else if (props.id === 2 && props.techStackImages) {
        return (
            <BorderBox 
                title={props.title}
                titleColor={props.titleColor}
                borderColor={props.borderColor}
                backgroundColor={props.backgroundColor}
                isCentered={false}
            >
                <Text style={styles.text}>
                    {props.text}
                </Text>
                <View style={styles.techStackContainer}>
                    {props.techStackImages.map((image, index) => (
                        <Image key={index} source={image} style={styles.techStackImage} />
                    ))}
                </View>
            </BorderBox>
        );
    } else if (props.id === 3) {
        return (
            <BorderBox 
                title={props.title}
                titleColor={props.titleColor}
                borderColor={props.borderColor}
                backgroundColor={props.backgroundColor}
                isCentered={false}
            >
                <Text style={styles.text}>
                    {props.text}
                </Text>
                <View style={styles.developersContainer}>
                    {props.developers.map((dev, index) => (
                        <View key={index} style={styles.developerCard}>
                            <Image style={styles.developerImage} source={dev.image} />
                            <Text style={styles.developerName}>{dev.name}</Text>
                            <Text style={styles.developerRole}>{dev.role}</Text>
                        </View>
                    ))}
                </View>
            </BorderBox>
        );
    } else {
        return (
            <BorderBox title={props.title}
            titleColor={props.titleColor}
            borderColor={props.borderColor}
            backgroundColor={props.backgroundColor}
            isCentered={false}>
                <Text style={styles.text}>
                    {props.text}
                </Text>
            </BorderBox>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 50,
        backgroundColor: COLORS.primary,
    },
    separator: {
        padding: 10,
    },
    imageContainer: {
        // alignItems: "center",
        // justifyContent: "center",
        width: '100%',
        height: '70',
    },
    flatList: {
        backgroundColor: COLORS.primary,
        paddingTop: 40,
        width: "90%"
    },
    text: {
        color: COLORS.tertiary,
        fontFamily: "Lexend_400Regular",
        margin: 20
    },
    button: {
        width: 100,
        height: 80,
    },
    titleText: {
        fontSize: 30,
        //fontWeight: "bold",
        color: COLORS.tertiary,
        fontFamily: "Lexend_700Bold"
    },
    teamImage: {
        width: '100%',
        height: 200,
        aspectRatio: 1.5, // Maintain aspect ratio
        resizeMode: 'contain',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 20,
        marginTop: 50,
        marginBottom: 25,
        // borderColor: COLORS.secondary, // Border color
        // borderRadius: 10, // Border radius for rounded corners
    },
    developersContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 10,
    },
    developerCard: {
        alignItems: 'center',
        margin: 10,
        width: 100,
    },
    developerImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 5,
    },
    developerName: {
        fontSize: 14,
        color: COLORS.tertiary,
        fontFamily: "Lexend_700Bold",
        textAlign: 'center',
    },
    developerRole: {
        fontSize: 12,
        color: COLORS.tertiary,
        fontFamily: "Lexend_400Regular",
        textAlign: 'center',
    },
    techStackContainer: {
        flexDirection: 'row', // Arrange images in a row
        flexWrap: 'wrap',     // Allow wrapping to next line
        justifyContent: 'center', // Center the images horizontally
        marginTop: 10,
        marginBottom: 10,
    },
    techStackImage: {
        width: '40%', // Set width to 45% to allow two images per row
        height: 100,  // Adjust height as needed
        margin: 5,    // Add some margin around each image for spacing
        resizeMode: 'contain', // Maintain aspect ratio
    },
})

export default IndividualTeam;