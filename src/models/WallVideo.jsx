import React, { useEffect, useRef, useState } from "react";
import src from "../videos/Video1.mp4"
import { DoubleSide } from 'three'
import { useVideoTexture } from '@react-three/drei';
//import { useVideoTexture } from "@react-three/drei";

export default function WallVideo() {
    const wallRef = useRef(null);
    const [isPlaying,setIsPlaying] = useState(false)
    const [props, setProps] = useState({ autoPlay: false , muted: false})
    const { VideoTexture } = require('three');
    const texture = useVideoTexture(src, props);
    const [start, setStart] = useState(false)

    useEffect(()=>{
        if(isPlaying) {
            texture?.image.play();
        }else{
            texture?.image.pause();
        }
    },[isPlaying])

    const onHandleVideo = (event) => {
        setIsPlaying(!isPlaying)
    }
    
    return (
        <mesh position={[0,1,-8]} scale = {10} dispose={null} onClick={onHandleVideo} > 
                <planeGeometry />
                <meshBasicMaterial map={texture} side={DoubleSide} toneMapped={false}/> 
                 
        </mesh>
        
    );
}
