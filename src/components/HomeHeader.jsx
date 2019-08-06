import React from 'react';
import './HomeHeader.css';
import logo from '../assets/greentrustwhite.png';
import Button from './Button';

const header = props => {
    return (
        <div className="Header">
            <div className="Logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="PersonalNav">
                PERSONAL
            </div>
            <div className="LoginSignup">
                <Button title="Log In" color="white" />
                <Button title="Sign Up" />
            </div>
        </div>
    )
}

export default header;