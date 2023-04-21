import React, { useEffect, useRef, useState } from "react";
import { DoubleSide } from 'three';
import { TextureLoader } from 'three';
import { useLoader } from "@react-three/fiber";
import sonic from "../images/Pika.gif"
import sonicExe from "../images/Pika2.gif"
//import { useVideoTexture } from "@react-three/drei";

export default function WallImage() {
    const wallRef = useRef(null);
    const sonicTexture = useLoader(TextureLoader, sonic)
    const sonicExeTexture = useLoader(TextureLoader, sonicExe)
    const [textura,setTextura] = useState(sonicTexture)
    const [change,setChange] = useState(false)
    useEffect(()=>{
        if(change){
            setTextura(sonicExeTexture)
        }else{
            setTextura(sonicTexture)
        }
    },[change])

    const onHandleVideo = (event) => {
        console.log(change)
        setChange(!change)
    }
    
    return (
        <mesh position={[0,1,8]} scale = {10} dispose={null} onPointerEnter={onHandleVideo} > 
                <planeGeometry />
                <meshBasicMaterial map={textura} side={DoubleSide} toneMapped={false}/> 
                 
        </mesh>
        
    );
}
