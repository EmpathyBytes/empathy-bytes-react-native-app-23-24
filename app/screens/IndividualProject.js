import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native";
import { COLORS } from "../../constants/theme";
import BackArrow from '../../constants/BackArrow';
import BorderBox from '../../constants/BorderBox';
import { getDownloadURL, ref } from "firebase/storage";
import { Audio } from 'expo-av';
import { fb_storage } from '../../firebaseConfig'; 
import { Colors } from 'react-native/Libraries/NewAppScreen';
const windowWidth = Dimensions.get('window').width;

function IndividualProject({ navigation, route }) {
    const { name, description, image, audio} = route.params;
    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);

    function CustomButton({ onPress, isPlaying }) {
        return (
            <TouchableOpacity onPress={onPress} style={styles.button}>
                {isPlaying ? 
                    <Image
                    style={styles.icon}
                    source={require('../../assets/pause.png')}
                    /> : 
                    <Image
                    style={styles.icon}
                    source={require('../../assets/play.png')}
                />}
            </TouchableOpacity>
        );
    }

    async function setAudioMode() {
        await Audio.setAudioModeAsync({
            playsInSilentModeIOS: true,
            allowsRecordingIOS: false,
            staysActiveInBackground: false,
            shouldDuckAndroid: true,
            playThroughEarpieceAndroid: false,
        });
    }
    setAudioMode();
    
    async function fetchAudioUrl() {
      const audioPath = audio;
      const storageRef = ref(fb_storage, audioPath);
      try {
        return await getDownloadURL(storageRef);
      } catch (error) {
        console.error("Error fetching audio URL:", error);
        return null;
      }
    }

    async function togglePlayback() {
        if (isPlaying && sound) {
            console.log('Stopping Sound');
            await sound.stopAsync();
            setIsPlaying(false);
        } else {
            if (!sound) {
                console.log('Loading Sound');
                const audioUrl = await fetchAudioUrl();
                if (audioUrl) {
                    const { sound: newSound } = await Audio.Sound.createAsync(
                        { uri: audioUrl },
                        { shouldPlay: true }
                    );
                    setSound(newSound);
                    setIsPlaying(true);
                } else {
                    console.log('Failed to load sound');
                }
            } else {
                console.log('Playing Sound');
                await sound.playAsync();
                setIsPlaying(true);
            }
        }
    }

    useEffect(() => {
        setAudioMode();
        return () => {
            sound?.unloadAsync();
        };
    }, [sound]);

    return (
        <View style={styles.container}> 
            <BackArrow navigation={navigation} page='Projects' color="#ABA174"/>
            <ScrollView>
                <View style={styles.scrollContent}>
                    <View style={styles.titleContainer}>
                        <BorderBox title={name} 
                                    borderColor={COLORS.tertiary} 
                                    titleColor={COLORS.tertiary} 
                                    backgroundColor={COLORS.primary} 
                                    isCentered={true}> 
                                     <View style={styles.imageContainer}>
                                    <Image 
                                       style={[styles.image, {marginTop: 75}]}
                                        source = {image}
                                       /> 
                                        </View>        
                        </BorderBox>
                    </View>

                    {audio && (
                        <View style={styles.audioContainer}>
                            <View style={styles.audioContainerLeft}>
                                <CustomButton isPlaying={isPlaying} onPress={togglePlayback}/>
                                    <Text>00:00
                                    </Text>
                            </View>
                            <Image 
                                style={styles.voice}
                                source={require('../../assets/voice.png')}/>     
                        </View>
                    )}

                    <View style={styles.titleContainer}>
                        <BorderBox title={"Description"} 
                                    borderColor={COLORS.tertiary} 
                                    titleColor={COLORS.tertiary}
                                    backgroundColor={COLORS.primary} 
                                    isCentered={false}>
                                    <Text style={styles.text}>
                                        {description}
                                    </Text> 
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
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 50,
        backgroundColor: COLORS.primary,
    },
    titleContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    descriptionContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    text: {
        color: "#FFFFFF",
        fontFamily: "Lexend_400Regular",
        marginLeft: 20,
        marginRight: 20,
        top: 20,
        justifyContent: "center",
        paddingBottom: 40,
        fontSize: 17
    },
    button: {
        width: 70,
        height: 40,
        marginTop: 50,
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: "Lexend_400Regular",
        marginLeft: 20,
        marginRight: 20,
    },
    teamImage: {
        width: 80,
        height: 80,
        padding: 80,
    },
    image: {
        width: 300,
        height: 200,
        left: 20,
        bottom: 20,
        borderRadius: 20,
      },
    audioContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        //marginLeft: 30,
        alignItems: 'center',
        width: "90%",
        height: 45,
        backgroundColor: "#FFFBE7",
        borderRadius: 200,
    },
    audioContainerLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: Colors.primary, 
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 20,
        marginLeft: 10,
        width: 40, 
        height: 40, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: "#FFFBE7",
    },
    buttonText: {
        color: "#FFFFFF", 
        fontSize: 16, 
    },
    audioButton: {
        color: "#FFFBE7",
    },
    icon: {
        width: 20,
        height: 20,
    },
    voice: {
        width: 30,
        height: 27,
        marginRight: 20,
    },
    scrollContent: {
        flex: 1,
        alignItems: "center",
        paddingBottom: 30,
        width: windowWidth, 
    },
    imageContainer: {
        // alignItems: "center",
        // justifyContent: "center",
        flexDirection: 'column',
        width: '100%',
    },
})

export default IndividualProject;