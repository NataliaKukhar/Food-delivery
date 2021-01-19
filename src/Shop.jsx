import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import shopPhone from './img/shopPhone.png';
import Template from './Elements/Template';

const Shop = (props) => {
    return (
        <div className="shopBlock">
            <Template
                      imgsrc={shopPhone}
                      name="Explore varieties"
                      title="Shop for your favorites
meal as e dey hot."
                      info="Shop for your favorite meals or drinks
and enjoy while doing it."
            />
        </div>
    )
}

export default Shop;