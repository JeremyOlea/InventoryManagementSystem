import React from 'react';
import { Link } from 'react-router-dom'
import '../../node_modules/materialize-css/dist/css/materialize.css'
import './Navbar.css';


const Navbar = ()=>{
    return(
            <nav className="nav-wrapper1">
                <div className="container">
                    <Link to="/" className="brand-logo">Home</Link>
                    
                    <ul className="right">
                        
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;
