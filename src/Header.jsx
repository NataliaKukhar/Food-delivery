import React from 'react';
import './scss/header.scss';
import phonesHead from "./img/phonesHead.png";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const Header = () => {
    return (
        <>
            <section className="headerBlock">
                <h6>Food app</h6>
                <h2>Why stay hungry when
                    you can order form Bella Onojie</h2>
                <p>Download the bella onoje’s food app now on</p>
                <div className="btnRow">
                    <a className="btn1">Playstore</a>
                    <a className="btn2">App store</a>
                </div>
            </section>
            <div className="storeBlock">
                <div className="phonesHead">
                    <img src={phonesHead}/>
                </div>
                <h4>How the app works</h4>
            </div>
        </>
    );
};
export default Header;
