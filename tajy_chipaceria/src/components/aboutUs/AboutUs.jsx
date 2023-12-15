import React from 'react'
import { TextBox } from '../TextBox'
import './AboutUs.css';

export const AboutUs = ({ id, text, path, name }) => {

    return (
        <>
            <div className='row mb-5'>
                <div className="col-lg-4 auImgContainer">
                    <img src={path} alt={name} className={name} />
                </div>
                <div className={(id === 1) ? "col-lg-8 order-lg-first" : "col-lg-8"}>
                    <TextBox key={id} text={text} />
                </div>
            </div>
        </>
    )
}
