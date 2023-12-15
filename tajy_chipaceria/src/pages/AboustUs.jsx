import React from 'react';
import { AU_TEXT } from '../assets/js/aboutUs.js';
import {AU_TEXT_SMALL_SCREEN} from '../assets/js/aboutUsSmallScreen.js';
import { AboutUsContainer } from '../components/AboutUsContainer.jsx';
import { TitleBox } from '../components/TitleBox.jsx';


export const AboustUs = () => {
    const isScreenSmall = (screen.width <= 450) ? true : false;

    return (
        <div className='aboutContainer' id='aboutUs-section'>
            <div className='container-fluid titleContainer'>
                <div>
                    <p className='topic fontStyle'>SOBRE NOSOTROS</p>
                </div>
                <div>
                    <p className='title fontStyle'>
                        Donde la Tradición y <br />
                        la Innovación se Encuentran
                    </p>
                </div>
            </div>
            {!isScreenSmall ? AU_TEXT.map(element => <div key={element.id} className='container-fluid text-content'>
                <AboutUsContainer id={element.id} text={element.text} path={element.path} name={element.name} isScreenSmall={isScreenSmall}/>
            </div>) : AU_TEXT_SMALL_SCREEN.map(element => <div key={element.id} className='container-fluid text-content'>
                <AboutUsContainer id={element.id} path={element.path} name={element.name} isScreenSmall={isScreenSmall} text1={element.text1} text2={element.text2} text3={element.text3} text4={element.text4}/>
            </div>)}
        </div>
    )
}
