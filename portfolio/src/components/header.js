// header /navbar
import React from 'react';
import { Link } from 'react-router-dom';

function header() {
    return (
        <nav className="navbar navbar-expand-lg">
            <h1 className="navbar-brand" href="#"> Ligaya Herndon</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav">
                    <Link to = "/aboutme"> About me </Link>
                    <Link to = "/myproject"> Portfolio </Link>    
                    <Link to = "/contactme"> Contact me </Link>    
                </ul>
            </div>   
        </nav>
    );
}

export default header;
