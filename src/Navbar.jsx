import React from 'react';
import { BrowserRouter ,NavLink } from 'react-router-dom';
import logo from './img/logo.png';
import './scss/styleNavbar.scss';
const Navbar = () => {
    return (
        <>
            <BrowserRouter>
                <div className="container-fluid nav-bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <NavLink className="navbar-brand" to="/" >
                                    <img src={logo} />
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <NavLink activeClassName="menu_active" exact className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" exact className="nav-link" to="/product">Product</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" exact className="nav-link" to="/faq">Faq</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
};
export default Navbar;