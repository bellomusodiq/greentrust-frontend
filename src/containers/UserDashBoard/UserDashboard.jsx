import React, {Component, Fragment} from 'react';
import { Link, Route, Switch } from "react-router-dom";
import './UserDashboard.css';
import SideNav from './SideNav';
import Header from './DashBoardHeader';
import DashBoardMain from './DashBoardMain';

class UserDashboard extends Component {

    render() {
        return (
            <div className="Dashboard">
                <SideNav />
                <div className="DashBoardMain">
                    <Header />
                    <Switch>
                        <Route path="/dashboard" component={DashBoardMain} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default UserDashboard;