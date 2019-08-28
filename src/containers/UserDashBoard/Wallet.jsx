import React, {Component} from 'react';
import { Link } from "react-router-dom";
import ProfileImage from "../../assets/p_image.jpg";
import Button from '../../components/Button';

class Wallet extends Component {
    state = {
        current: "Notification"
    }
    render() {
        
        return (
            <div className="DashboardMain">
                <div className="RevenuePayments">
                    <div className="Revenue">
                        <p className="revenue-heading">REVENUE</p>
                        <p className="revenue-amount">NGN 10,000</p>
                        <p className="last-revenue">Yesterday: NGN 8,500</p>
                    </div>
                    <div className="Pending">
                        <p className="pending-heading">PENDING PAYMENTS</p>
                        <p className="pending-amount">NGN 81,345</p>
                    </div>
                </div>
                <div className="AddMoneytoWallet">
                    <h3>ADD MONEY TO WALLET</h3>
                    <form action="">
                        <input type="number" placeholder="Amount To deposit" />
                        <Button title="Make Payment" className="AddmoneyBtn" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Wallet;