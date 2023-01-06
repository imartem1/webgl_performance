import { useThree, extend, useFrame } from "@react-three/fiber";
import { useRef } from 'react';
import { OrbitControls } from "@react-three/drei";
import { Perf } from 'r3f-perf';
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";


export default function Scene()
{
    const model = useLoader(GLTFLoader, './models/test2.glb')
    console.log(model);
    return <>
        <Perf/>
        <OrbitControls enableDamping={ false }/>
        <primitive object={model.scene}/>
    </>
}