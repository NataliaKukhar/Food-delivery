import React from 'react';
import './scss/download.scss';

const Download = () => {
    return (
        <>
            <section className="downloadBlock">
                <h3>Download the app now.</h3>
                    <div className="d-none d-lg-block d-md-block  downloadText">Available on your favorite store. Start your premium experience now</div>
                    <div className="d-lg-none d-md-none downloadText">Most calendars are
                        designed for teams. </div>

                <div className="btnRow">

                    <a className="d-none d-lg-block d-md-block btn1">Playstore</a>
                    <a className="d-none d-lg-block d-md-block btn2">App store</a>

                    <a className="d-lg-none d-md-none btn1">Buy now</a>
                    <a className="d-lg-none d-md-none btn2">Try for free</a>
                </div>
            </section>
        </>
    );
};
export default Download;
