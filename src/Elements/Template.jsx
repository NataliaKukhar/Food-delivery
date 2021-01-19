import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../scss/template.scss';

const Template = (props) => {
    return (
        <div className="row phoneBlock">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 imgPhone">
                <img src={props.imgsrc} className="imgPhone" alt="phone img"/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 textBlock">
                <h6>{props.name} </h6>
                <h3>{props.title} </h3>
                <p>{props.info} </p>
            </div>

        </div>
    )
}
export default Template;
