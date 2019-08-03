import React from 'react';
import './HomeHeader.css';
import logo from '../assets/greentrustwhite.png';
import LoginSignupBtn from './LoginSignupBtn';

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
                <LoginSignupBtn title="Log In" color="white" />
                <LoginSignupBtn title="Sign Up" />
            </div>
        </div>
    )
}

export default header;