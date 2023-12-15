import React from 'react';
import { AU_TEXT } from '../assets/js/aboutUs.js';
import { AU_TEXT_SMALL_SCREEN } from '../assets/js/aboutUsSmallScreen.js';
import { AboutUs } from '../components/aboutUs/AboutUs.jsx';
import { TitleBox } from '../components/TitleBox.jsx';
import { AboutUsSmallScreen } from '../components/aboutUs/AboutUsSmallScreen.jsx';


export const AboutUsContainer = () => {
    const isScreenSmall = (screen.width <= 450) ? true : false;

    return (
        <div className='aboutContainer' id='aboutUs-section'>
            <div className='container-fluid titleContainer'>
                <TitleBox topic={"SOBRE NOSOTROS"} title={"Donde la Tradición y"} title2={'la Innovación se Encuentran'} />
            </div>
            {!isScreenSmall ? AU_TEXT.map(element => <div key={element.id} className='container-fluid text-content'>
                <AboutUs id={element.id} text={element.text} path={element.path} name={element.name} />
            </div>) : AU_TEXT_SMALL_SCREEN.map(element => <div key={element.id} className='container-fluid text-content'>
                <AboutUsSmallScreen path={element.path} name={element.name} text1={element.text1} text2={element.text2} text3={element.text3} text4={element.text4} />
            </div>)}
        </div>
    )
}
