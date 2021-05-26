// header /navbar
import React from 'react';
import { Link } from 'react-router-dom';

function header() {
    return (
        <nav className="navbar navbar-expand-lg">
            <h1 className="navbar-brand" href="#"> Ligaya Herndon</h1>
            <div className="navbar-nav" id="navbarText">
                <ul className="nav-link">
                    <Link to = "/aboutme"> About me </Link>
                    <Link to = "/myportfolio"> Portfolio </Link>    
                    <Link to = "/contactme"> Contact me </Link>    
                </ul>
            </div>   
        </nav>
    );
}

export default header;
