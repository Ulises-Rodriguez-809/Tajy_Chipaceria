import React from 'react'
import { Brand } from '../components/Brand'
import { NAV_LINKS } from '../assets/js/navLinks.js';

export const OurChipa = () => {
    return (
        <>
            <header className='container-fluid container-bg'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div>
                            <Brand />
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active"  href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#final">Link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
