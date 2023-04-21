import { OrbitControls, Sky } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import WallVideo from './models/WallVideo'
import WallImage from './models/WallPicture'


export default function Experience() {
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <Sky />
        <WallVideo/>
        <WallImage/>
    </>
}