import React from 'react';
import './UserDashboard.css';
import ProfileImage from '../../assets/p_image.jpg';
import api from '../../api';

class Header extends React.Component{
    
    render() {
        let balance = "0.00";
        let lastname = "loading..";
        let firstname = "loading..";
        if (this.props.user) {
            balance = this.props.user.revenue;
            lastname = this.props.user.last_name;
            firstname = this.props.user.first_name;
        }
        return (
            <div className="DashbaordHeader">
                <div className="DashboardSearch">
                    <i style={{position: 'absolute', marginLeft: 10, color: '#007f00'}} className="fas fa-search"></i>
                    <input className="" type="text" placeholder="Search transactions, invoices or help"/>
                </div>
                <div className="DashboardBalance">BALANCE {balance} NGN</div>
                <div className="Dbnav hiddenSmall"><i className="far fa-life-ring"></i></div>
                <div className="Dbnav hiddenSmall"><i className="fas fa-bell"></i></div>
                <div className="Dbnav hiddenSmall">{lastname + ' ' + firstname} <i className="fas fa-angle-down"></i></div>
                <div className="Dbnav">
                    <img src={ProfileImage} alt="profile image" />
                </div>
            </div>
        )
    }
}

export default Header;