import React from 'react';
import logo from "./img/logo.png";
import {NavLink} from "react-router-dom";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './scss/footer.scss';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-2 col-md-2 col-sm-2 mx-auto logoFooter">
                            <img src={logo}/>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 mx-auto icon">
                            <a href="" className="fa fa-twitter"></a>
                            <a href="" className="fa fa-facebook-square"></a>
                            <a href="" className="fa fa-instagram d-none d-lg-block d-md-block "></a>
                            <a href="" className="fa fa-linkedin d-lg-none d-md-none"></a>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-6 mx-auto footText">
                            <p>Copywright 2020 Bella Onojie.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;
