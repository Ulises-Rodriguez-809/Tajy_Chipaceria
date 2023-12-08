import React from 'react'
import { TitleBox } from '../components/TitleBox'
import { Carousel } from '../components/Carousel'

export const Testimonials = () => {
    return (
        <div className='aboutContainer'>
            <div className='container-fluid titleContainer'>
                <TitleBox topic={"TESTIMONIOS"} title={"Nuestros clientes felices"} textPosition={"center"}/>
                <Carousel />
            </div>
        </div>
    )
}
