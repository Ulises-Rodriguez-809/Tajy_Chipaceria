import React from 'react'

export const NavBarButton = ({cellNumber}) => {
    return (
        <button className='btn-realizar-pedido'>
            <a href={`https://wa.me/${cellNumber}`} target='_blank'>Realizar Pedido</a>
        </button>
    )
}
