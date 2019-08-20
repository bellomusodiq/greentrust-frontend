import React from 'react';
import { Link } from "react-router-dom";

const sideNav = props => {

    return (
        <div className="DashboardSidenav">
            <div className="SideNavHeader">
                <h3>DARE ADU</h3>
                <p>dareadu</p>
            </div>
            <Link to="/dashboard" ><i className="fas fa-chart-bar"></i> Dashboard</Link>
            <Link to="/" ><i className="fas fa-shield-alt"></i> Create Trust</Link>
            <Link to="/" ><i className="fas fa-list"></i> List <i style={{marginLeft: 190}} className="fas fa-angle-down"></i></Link>
            <Link to="/dashboard/transactions" ><i className="fas fa-history"></i> Transaction Log</Link>
            <Link to="/" ><i className="fas fa-download"></i> Withdraw <i style={{marginLeft:125}} className="fas fa-angle-down"></i></Link>
            <Link to="/" ><i className="far fa-envelope"></i> Inbox</Link>
            <div style={{width: '100%', height: 1, background: 'white'}}></div>
            <Link to="/" ><i className="fas fa-exchange-alt"></i> Transfer</Link>
            <Link to="/" ><i className="far fa-envelope"></i> NearestTruster</Link>
            <div style={{width: '100%', height: 1, background: 'white'}}></div>
            <Link to="/" ><i className="fas fa-flag"></i> Disputes</Link>
            <Link to="/" ><i className="fas fa-cog"></i> Settings</Link>
            <Link to="/" ><i className="far fa-life-ring"></i> Help Center</Link>
        </div>
    )
}

export default sideNav;