import React from 'react'
import "./Products.css"
import { ProductsCarousel } from './ProductsCarousel'
import { TitleBox } from '../TitleBox'

export const Products = () => {
    return (
        <>
        <div className='container-fluid titleContainer' id='productos-section'>
            <TitleBox topic={"EXPLORA"} title={"Nuestros productos exclusivos"} textPosition={"center"}/>
            <ProductsCarousel />
        </div>
        </>
    )
}
