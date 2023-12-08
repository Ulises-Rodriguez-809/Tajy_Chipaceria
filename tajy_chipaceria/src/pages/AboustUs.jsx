import React from 'react';
import { AU_TEXT } from '../assets/js/aboutUs.js';
import { AboutUsContainer } from '../components/AboutUsContainer.jsx';
import { TitleBox } from '../components/TitleBox.jsx';


export const AboustUs = () => {
    return (
        <div className='aboutContainer'>
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
            {AU_TEXT.map(element => <div key={element.id} className='container-fluid text-content'>
                <AboutUsContainer id={element.id} text={element.text} path={element.path} name={element.name} />
            </div>)}
        </div>
    )
}
