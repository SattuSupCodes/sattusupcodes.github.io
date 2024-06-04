import React from 'react'
import { Link } from 'react-router-dom';

const InfoBox=({text, link, btnTxt})=>(
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to ={link} className='neo-brutalism-white neo-btn'>
            {btnTxt}
           
        </Link>
    </div>
)
const renderContent ={
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Shatakshi Singh</span> 😎
            <br/> A Web Developer and a Content Creator from India
        </h1>
    ),
    2:(
        <InfoBox 
        text="My skills speak for themselves 💪 Curious to know them?"
        link="/about"
        btnTxt="Learn More"
        />
    ),
    3: (
        <InfoBox 
        text=" Created many projects in web development as well as practiced in content creation!"
        link="/Projects"
        btnTxt="Visit my protfolio"
        />
    ),
    4: (
        <InfoBox 
        text="Need a dev for a project? I'm just a few keystrokes away"
        link="/Contact"
        btnTxt="Let's talk!"
        />
    ),
}


const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage]|| null;
        
   


}

export default HomeInfo 