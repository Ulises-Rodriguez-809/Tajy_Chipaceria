import React from 'react'
import { TitleBox } from '../TitleBox'
import { CarouselTestimonials } from './CarouselTestimonials.jsx'
import './Testimonials.css'


export const Testimonials = () => {

    return (
        <div className='testimonials-container'>
            <div className='container-fluid titleContainer'>
                <TitleBox topic={"TESTIMONIOS"} title={"Nuestros clientes felices"} textPosition={"center"}/>
                <CarouselTestimonials/>
            </div>
        </div>
    )
}
