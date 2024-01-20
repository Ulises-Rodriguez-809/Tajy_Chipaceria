import React from 'react'
import { ProductCard } from './ProductCard'
import { PRODUCTS } from '../../assets/js/products'

export const ProductsCarousel = () => {
    return (
        <>
            <div id="products" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                <div className="carousel-indicators">
                    {PRODUCTS.map((product, index) => <button key={product.id} type="button" data-bs-target="#products" data-bs-slide-to={index} className={product.active ? "active" : ""} aria-current="true" aria-label={`Slide  ${index}`}></button>)}
                </div>
                <div className="carousel-inner">
                    {PRODUCTS.map((product) => <div key={product.id} className={product.active ? "carousel-item active text-center" : "carousel-item text-center"}>
                        <ProductCard key={product.id} path={product.path} name={product.name} text={product.text} ing={product.ingridients} />
                    </div>)}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#products" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#products" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
