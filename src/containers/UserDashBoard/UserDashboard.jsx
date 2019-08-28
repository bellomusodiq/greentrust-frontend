import React, {Component, Fragment} from 'react';
import { Link, Route, Switch } from "react-router-dom";
import './UserDashboard.css';
import SideNav from './SideNav';
import Header from './DashBoardHeader';
import DashBoardMain from './DashBoardMain';
import DashBoardTransaction from './DashboardTransaction';
import Settings from './Settings';
import Withdraw from './Withdraw';
import Wallet from './Wallet';
import api from '../../api';

class UserDashboard extends Component {
    state = {
        user: null,
        userLoading: true,
        userError: false
    }
    
    componentDidMount() {
        api.get('/users/1/')
        .then(res => {
            this.setState({user: res.data, userLoading: false, userError: false})
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div className="Dashboard">
                <SideNav user={this.state.user} error={this.state.userError}
                loading={this.state.userLoading} />
                <div className="DashBoardMain DM">
                    <Header user={this.state.user} error={this.state.userError}
                loading={this.state.userLoading} />
                    <Switch>
                        <Route path="/dashboard/settings" component={Settings} />
                        <Route path="/dashboard/transactions" component={DashBoardTransaction} />
                        <Route path="/dashboard/withdraw" component={Withdraw} />
                        <Route path="/dashboard/wallet" component={Wallet} />
                        <Route path="/dashboard" render={() => <DashBoardMain user={this.state.user} loading={this.state.userLoading} error={this.state.userError} />} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default UserDashboard;