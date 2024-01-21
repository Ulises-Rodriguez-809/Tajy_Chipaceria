import React from 'react'

export const NavBarImg = ({srcImg, altImg}) => {
    return (
        <div className='col-xxl-6 navBar-img-container'>
            <img src={srcImg} alt={altImg} className='navBar-img' />
        </div>
    )
}
