import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import loginPhone from './img/loginP.png';
import Template from './Elements/Template';

const Login = (props) => {
    return (
        <section className="login">
            <Template
                      name="Create an account"
                      title="Create/login to an existing
                            account to get started"
                      info="An account is created with your email
                            and a desired password"
                      imgsrc={loginPhone}
            />
        </section>
    )
}

export default Login;