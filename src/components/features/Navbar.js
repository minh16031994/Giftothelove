import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div className="container-navbar">
            <div className="logo">
            
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Log In</Link>
                </li>
                <li>
                    <Link to="/">SignUp</Link>
                </li>
            
            </ul>
        
        </div>
    )
}
export default Navbar;
