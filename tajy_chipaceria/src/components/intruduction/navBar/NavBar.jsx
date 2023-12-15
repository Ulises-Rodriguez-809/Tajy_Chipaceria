import React from 'react'
import { Brand } from '../../Brand.jsx'
import { NAV_LINKS } from '../../../assets/js/navLinks.js';
import './NavBar.css'

export const NavBar = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-dark navbar-expand-lg">
                    <div className="container-fluid">
                        <div className='brand-container'>
                            <Brand />
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon "></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {NAV_LINKS.map(element => <li className="nav-item" key={element.id}>
                                <a className="nav-link active" href={`#${element.id}`}>{element.text}</a>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
