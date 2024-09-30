import {React, Suspense} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions } from "react-native"
import { COLORS } from '../../constants/theme';
import {Canvas, UseFrame} from '@react-three/fiber';
import {useGLTF} from '@react-three/drei';
import useControls from "r3f-native-orbitcontrols";
import RightConverseModel from '../../assets/RightConverseModel';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function VRScreen({navigation}) {
    const [OrbitControls, events] = useControls()
    return (

        <View {...events} style={{flex:1}}>
            <Canvas camera={{ fov:70, position: [0,0,1]}}>
                <ambientLight />
                <OrbitControls />
                <directionalLight intensity={2} position={[0,0,50]} />
                <Suspense fallback={null}>
                    <RightConverseModel />
                </Suspense>
            </Canvas>
        </View>
    )
}