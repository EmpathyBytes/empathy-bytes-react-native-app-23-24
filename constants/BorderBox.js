import { isCancel } from 'axios';
import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";
//const windowWidth = Dimensions.get('window').width;

const BorderBox = (props) => {
    return (
        <View style={[styles.borderBox, {borderColor: props.borderColor}, props.style]}> 
            {/*if isCentered, center the text, else only apply absolute position and left: 20*/}
            <View style={props.isCentered ? {position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'} : {position: 'absolute'}}>
            <Text adjustsFontSizeToFit={true}
              numberOfLines={2}
              style={[styles.text, {color: props.titleColor, backgroundColor: props.backgroundColor, left: props.isCentered ? 'auto' : 20, marginBottom: 100, fontSize: props.isCentered ? 35 : 30}]}>
              {props.title}
              </Text>
            </View>
            <View style={props.children.type == Image ? styles.image : styles.subtext}>
              {props.children}
            </View>
        </View>
    );
}

export default BorderBox;

const styles = StyleSheet.create({
  borderBox: {
    flexDirection: 'row',
    borderWidth: 1.5,
    borderRadius: 35,
    margin: 5,
  },
  text: {
    position: 'absolute',
    fontFamily: "Lexend_700Bold",
    top: -27,
    paddingHorizontal: 5,
  },
  subtext: {
    height: '100%',
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    //padding: 100,
    aspectRatio: 1.5, // Maintain aspect ratio
    resizeMode: 'contain',
  }
})