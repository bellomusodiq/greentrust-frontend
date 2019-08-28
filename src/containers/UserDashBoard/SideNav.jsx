import React from 'react';
import { Link } from "react-router-dom";

const sideNav = props => {
    let lastname = "loading..";
    let firstname = "loading..";
    let username = "loading..";
    let balance = "0.00";
    if (props.user) {
        lastname = props.user.last_name;
        firstname = props.user.first_name;
        username = props.user.username;
        balance = props.user.revenue;
    }
    return (
        <div className="DashboardSidenav">
            <div className="SideNavHeader">
                <h3>{lastname} {firstname}</h3>
                <p>{username}</p>
                <p>{balance}</p>
            </div>
            <Link to="/dashboard" ><i className="fas fa-chart-bar"></i> Dashboard</Link>
            <Link to="/create-trust" ><i className="fas fa-shield-alt"></i> Create Trust</Link>
            <Link to="/" ><i className="fas fa-list"></i> List </Link>
            <Link to="/dashboard/transactions" ><i className="fas fa-history"></i> Transaction Log</Link>
            <Link to="/dashboard/withdraw" ><i className="fas fa-download"></i> Withdraw</Link>
            <Link to="/inbox" ><i className="far fa-envelope"></i> Inbox</Link>
            <div style={{width: '100%', height: 1, background: 'white'}}></div>
            <Link to="/" ><i className="fas fa-exchange-alt"></i> Transfer</Link>
            <Link to="/" ><i className="far fa-envelope"></i> NearestTruster</Link>
            <Link to="/dashboard/wallet" ><i className="fas fa-wallet"></i> TrustWallet</Link>
            <div style={{width: '100%', height: 1, background: 'white'}}></div>
            <Link to="/" ><i className="fas fa-flag"></i> Disputes</Link>
            <Link to="/dashboard/settings" ><i className="fas fa-cog"></i> Settings</Link>
            <Link to="/" ><i className="far fa-life-ring"></i> Help Center</Link>
        </div>
    )
}

export default sideNav;