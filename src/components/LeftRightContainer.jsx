import React, { Fragment } from 'react';
import './LeftRightContainer.css';
import LeftRight from './LeftRight';
import cart from '../assets/ic_add_shopping_cart_24px.svg';
import clipbord from '../assets/ic_content_paste_24px.svg';
import fingerprint from '../assets/ic_fingerprint_24px.svg';
import edit from '../assets/ic_mode_edit_24px.svg';
import verified from '../assets/ic_verified_user_24px.svg';
import Process from '../assets/PROCESS.png';

const container = props => {

    return (
        <Fragment>
        {props.first?<div className="LeftRightContainer">
            <LeftRight>
                <h4>We Protect the interest of everybody, everytime</h4>
                <p>Buyer or Seller, we got your back</p>
            </LeftRight>
            <LeftRight right={true}>
                <h4>Build trust in your business</h4>
                <p>Trust is important in business</p>
                <p>Focus on building your business</p>
                <p>We'll help you build Trust</p>
            </LeftRight>
            <LeftRight>
                <h4>Get value for your money</h4>
                <p>With our strict manual and automated</p>
                <p>features, you can only get exactly what</p>
                <p>you agreed with the seller</p>
            </LeftRight>
            <LeftRight right >
                <h4>Insured by the best, secured by the foremost</h4>
                <p>We are insured by the best in Nigeria. Our</p>
                <p>platform is built on the best technology and</p>
                <p>PCI DSS compliant.</p>
            </LeftRight>
        </div>
        :
        <div className="LeftRightContainer">
            <img src={Process} alt="Process" className="Process" />
            <h4 className="Steps">Steps to Get Started</h4>
            <p>The process of registration and getting adequate</p>
            <p>social commerce protection is in four easy steps.</p>
            <LeftRight>
                <img src={edit} alt="Edit" />
                <h4>Free account creation</h4>
                <p>Getting Started is quite easy.</p>
            </LeftRight>
            <LeftRight right={true}>
                <img src={fingerprint} alt="Fingerprint" />
                <h4>We want to confirm that it is really you</h4>
                <p>It's really straight-forward. We only </p>
                <p>confirm your email address and </p>
                <p>phone number.</p>
            </LeftRight>
            <LeftRight>
                <img src={cart} alt="Cart" />
                <h4>Get value for your money</h4>
                <p>Simple enter the other party's email</p>
                <p>address or username and create </p>
                <p>Trust.</p>
            </LeftRight>
            <LeftRight right >
                <img src={verified} alt="Verified" />
                <h4>Deliver order as seller. Accept 
                    order as buyer.</h4>
                    <p>Deliver the goods and or services as </p>
                    <p>soon as possible. If you are satisfied</p>
                    <p>with the delivery, release funds as </p>
                    <p>soon as possible.</p>
            </LeftRight>
        </div>
        }
        </Fragment>
    )
}

export default container;