import React from 'react';
import ServCards from '../ServCards/ServCards';
import { OUR_SERV } from '../../src/assets/js/ourserv';
import "./OurServ.css";

export const OurServ = () => {
  return (
    <div className='service-box d-flex flex-column align-items-center'>
        <div className='container-fluid d-flex gap-4 flex-column w-75'>
            <span className='fs-5 span-service'>NUESTRO SERVICIO</span>
            <h2 className='text-start title-serv fs-1'>¿Por qué nos escogen?</h2>
            <p className='fs-3 text-serv'>Nos caracterizamos por llevar la experiencia directamente a nuestros clientes. Desde los puestos ambulantes, entregamos chipa calentito, fusionando la tradición con la conveniencia moderna. En Tajy Chipacería, la calidad es nuestra firma y la mejora constante nuestra promesa.</p>
        </div>
        <div className=' p-5 cards-service'>
            {OUR_SERV.map(service=><ServCards key={service.id}{...service} />)}
        </div>
    </div>
);
}