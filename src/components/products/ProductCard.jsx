import React from 'react'

export const ProductCard = ({path,name,text,ing}) => {
    return (
        <>
        <div className='container-fluid cardContainer mt-5'>
            <div className="card">
                <img src={path} className="card-img-top imgCard" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{text}</p>
                    </div>
                    <div className='divUlConatainer'>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item card-text">
                                <p>Ingredientes:</p>
                                <p>{ing}</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className='btn-catalogo'>
                            <a href='https://wa.me/c/5492613663231' target='_blank' >Realizar Pedido</a>
                        </button>
                    </div>
            </div>
        </div>
        </>
    )
}
