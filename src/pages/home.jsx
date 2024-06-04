import { Suspense, useState , useEffect, useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'


import Island from '../models/island'
import Sky from '../models/sky'
import Bird from '../models/bird'
import Plane from '../models/plane'
import HomeInfo from '../components/homeinfo'
import sakura from '../assets/sakura.mp3'



const Home = () => {
    const audioRef= useRef(new Audio(sakura));
    audioRef.current.volume=0.4;
    audioRef.current.loop=true;
    

    const [isRotating, setIsRotating]=useState(false);
    const [currentStage, setCurrentStage] = useState(1)
    const[isPlayingMusic, setIsPlayingMusic]=useState(false);

    useEffect(()=>{
        if(isPlayingMusic){
            audioRef.current.play();
        }
        return()=>{
            audioRef.current.pause();
        }

    }, [isPlayingMusic])
    const adjustIslandForScreenSize = () => {
        let screenScale= null;
        let screenPosition=[0,-6.5,-43];
        let rotation=[0.1,4.7,0];
         
        

        if(window.innerWidth<768) {
            screenScale=[0.9, 0.9, 0.9];
            
        }
        else{
            screenScale=[1, 1, 1];
            
        }
        return [screenScale, screenPosition, rotation];
    }
    
    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition;
       
        

        if(window.innerWidth<768) {
            screenScale=[1.5,1.5,1.5];
            screenPosition=[0,-1.5,0];
            
        }
        else{
            screenScale=[3,3,3];
            screenPosition=[0,-4,-4]
            
        }
        return [screenScale, screenPosition];
    }
    const [islandScale, islandPosition, islandRotation]= adjustIslandForScreenSize();
    const [planeScale, planePosition,]= adjustPlaneForScreenSize();
    return(
        
       <section className="w-full  h-screen relative">
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
            {currentStage && <HomeInfo currentStage={currentStage}/>}
        </div>
        <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1, far:1000 }}>
        <Suspense fallback={<Loader />}>
            <directionalLight position={[10,1,1]} intensity={2} />
            <ambientLight intensity={0.5}/>
            <pointLight/>
            <spotLight/>
            <hemisphereLight skycolor="#b1e1ff" groundColor="#00000" intensity={1}/>
            <Bird/>
            <Sky  />
            <Island 
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}/>
            
            
            <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0,20,0]}/>
            
            
        

        </Suspense>


        </Canvas>
        <div>
            
        </div>
       </section>
    )
}
export default Home