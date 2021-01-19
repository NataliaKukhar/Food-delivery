import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar';
import Header from './Header';
import './scss/app.scss';
import Login from "./Login";
import Shop from "./Shop";
import Checkout from "./Checkout";
import Download from "./Download";
import Footer from "./Footer";


const App = () => {
    return (
        <div className="foodDelivery">
            <Navbar/>
            <Header/>
            <Login/>
            <Shop/>
            <Checkout/>
            <Download/>
            <Footer/>
        </div>
    )
}
export default App;