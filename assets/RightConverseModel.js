import {React} from 'react';
import {useGLTF} from '@react-three/drei';

export default function RightConverseModel(props) {
    const { nodes, materials } = useGLTF(require('../assets/RightConverse.glb'))
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.baked_mesh001.geometry} material={materials['g0.002']} position={[0, 0.161, 0]} rotation={[1.632, 0.011, -0.018]} />
      </group>
    )
}
