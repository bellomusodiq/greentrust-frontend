import React from 'react';

const header = props => (
    <div className="DashbaordHeader">
        <div className="DashboardSearch">
            <input className="" type="text" placeholder="Search transactions, invoices or help"/>
        </div>
        <div className="DashboardBalance">BALANCE 10,000 NGN</div>
        <div className="Dbnav">world_icon</div>
        <div className="Dbnav">notification</div>
        <div className="Dbnav">name_dropdown</div>
        <div className="Dbnav">Profile image</div>
    </div>
)

export default header;