import React from 'react'
import { TitleBox } from '../TitleBox'
import { Carousel } from './Carousel'
import './Testimonials.css'
import {COMMENTS} from '../../assets/js/comments.js';


export const Testimonials = () => {

    // console.log(COMMENTS)
    return (
        <div className='testimonials-container'>
            <div className='container-fluid titleContainer'>
                <TitleBox topic={"TESTIMONIOS"} title={"Nuestros clientes felices"} textPosition={"center"}/>
                <Carousel  arr={COMMENTS}/>
            </div>
        </div>
    )
}
