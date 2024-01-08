import React from 'react';
import {COMMENTS} from '../../assets/js/comments.js';


export const CarouselTestimonials = () => {

    return (
        <>
            <div id="testimonials" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                <div className="carousel-indicators">
                    {COMMENTS.map(commnet => <button key={commnet.client} type="button" data-bs-target="#testimonials" data-bs-slide-to={commnet.id} className={commnet.active ? "active" : ""} aria-current="true" aria-label={`Slide  ${commnet.id}`}></button>)}
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
                                <div className='col-sm-6 customers-container'>
                                    <p className='customerOpinion'>{commnet.client}</p>
                                </div>
                                <div className='col-sm-6 stars'>
                                    <img src={commnet.pathStars} alt='stars' />
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
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
        </>
    )
}
