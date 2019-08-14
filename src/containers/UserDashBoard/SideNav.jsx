import React from 'react';
import { Link } from "react-router-dom";

const sideNav = props => {

    return (
        <div className="DashboardSidenav">
            <Link to="/" >Dashboard</Link>
            <Link to="/" >Create Trust</Link>
            <Link to="/" >List</Link>
            <Link to="/" >Transaction Log</Link>
            <Link to="/" >Withdraw</Link>
            <Link to="/" >Inbox</Link>
            <br/>
            <Link to="/" >Disputes</Link>
            <Link to="/" >Settings</Link>
            <Link to="/" >Help Center</Link>
        </div>
    )
}

export default sideNav;