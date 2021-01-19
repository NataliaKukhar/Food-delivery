import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import checkOut from './img/checkOut.png';
import Template from './Elements/Template';

const Login = (props) => {
    return (
        <section className="checkout">
            <Template
                name="Checkout"
                title="When you done check out
and get it delivered."
                info="When you done check out and get it
delivered with ease."
                imgsrc={checkOut}
            />
        </section>
    )
}

export default Login;