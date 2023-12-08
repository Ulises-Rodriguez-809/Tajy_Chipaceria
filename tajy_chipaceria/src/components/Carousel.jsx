import React from 'react';
import {COMMENTS} from '../assets/js/comments.js';

export const Carousel = () => {

    return (
        <div id="testimonials" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
            <div className="carousel-indicators">
                {COMMENTS.map(commnet => <button key={commnet.client} type="button" data-bs-target="#testimonials" data-bs-slide-to={commnet.id} className={commnet.active ? "active" : ""} aria-current="true" aria-label={`Slide  ${commnet.id}`}></button>)}
                {/* <button type="button" data-bs-target="#testimonials" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#testimonials" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#testimonials" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
            </div>
            <div className="carousel-inner">
                {COMMENTS.map((commnet) => <div key={commnet.client} className={commnet.active ? "carousel-item active text-center" : "carousel-item text-center"}>
                    <div className='comment-container'>
                        <p>
                            {commnet.commnet}
                        </p>
                    </div>
                    <div className='container-fluid stars-container'>
                        <div className='row'>
                            <div className='col customers-container'>
                                <p className='customerOpinion'>{commnet.client}</p>
                            </div>
                            <div className='col stars'>
                                <img src='./imgStars/stars_1.png' alt='stars' />
                            </div>
                        </div>
                    </div>
                </div>
                )}
                {/* <div className="carousel-item active text-center">
                    <div className='comment-container'>
                        <p>
                            “ Ay, me encantan! ser alérgica al gluten hace que la comida sea tan aburrida y sin sabor, pero Tajy es diferente... se nota que los hacen con amor! “
                        </p>
                    </div>
                    <div className='container-fluid stars-container'>
                        <div className='row'>
                            <div className='col customers-container'>
                                <p className='customerOpinion'>Amelia Rodríguez</p>
                            </div>
                            <div className='col stars'>
                                <img src='./imgStars/stars_1.png' alt='stars' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item text-center">
                    <p>hgfgjhg</p>

                </div>
                <div className="carousel-item text-center">
                    <p>safdshgjhgjhgj654654aa</p>
                </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonials" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonials" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
