import React from 'react';
import './ServCards.css';

const ServCards = ({path, text, title }) => {
  return (
    <div className='p-4 card-content card d-flex align-items-center'>
        <img className='card-img-top pb-4' style={{width: "8rem"}} src={path} alt='service'/>
        <span className='card-title'>{title}</span>
        <p className='card-text text-center'>{text}</p>
    </div>
  )
}

export default ServCards;