import React from 'react';
// import './UserDashboard.css';
import ProfileImage from '../../assets/p_image.jpg';

const header = props => (
    <div className="DashbaordHeader">
        <div className="DashboardSearch">
            <i style={{position: 'absolute', marginLeft: 10, color: '#007f00'}} className="fas fa-search"></i>
            <input className="" type="text" placeholder="Search transactions, invoices or help"/>
        </div>
        <div className="DashboardBalance">BALANCE 10,000 NGN</div>
        <div className="Dbnav"><i class="far fa-life-ring"></i></div>
        <div className="Dbnav"><i className="fas fa-bell"></i></div>
        <div className="Dbnav">Bello Mayowa <i className="fas fa-angle-down"></i></div>
        <div className="Dbnav">
            <img src={ProfileImage} alt="profile image" srcset=""/>
        </div>
    </div>
)

export default header;