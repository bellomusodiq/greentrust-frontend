import React, {Component} from 'react';
import './Withdraw.css';

class Withdraw extends Component {

    render() {
        return (
            <div className="Withdraw">
                <h2>WITHDRAWAL HISTORY</h2>
                <div className="WithdrawTable">
                    <h4>SN</h4>
                    <h4>TRANSACTION ID</h4>
                    <h4>AMOUNT</h4>
                    <h4>STATUS</h4>
                    <h4>DATE/TIME</h4>
                    <p>1</p>
                    <p>FDA23xxAHsie34</p>
                    <p>20000 NGN</p>
                    <p>Pending</p>
                    <p>2019-12-12 02:22AM</p>
                    <p>1</p>
                    <p>FDA23xxAHsie34</p>
                    <p>20000 NGN</p>
                    <p>Pending</p>
                    <p>2019-12-12 02:22AM</p>
                    <p>1</p>
                    <p>FDA23xxAHsie34</p>
                    <p>20000 NGN</p>
                    <p>Pending</p>
                    <p>2019-12-12 02:22AM</p>
                </div>
                <h2>MAKE WITHDRAWAL</h2>
                <form action="" className="WithdrawalForm">
                    <p>Account Name</p>
                    <input type="text"/>
                    <p>Account Number</p>
                    <input type="number" name="" id=""/>
                    <p>Bank Name</p>
                    <input type="text"/>
                    <div>
                        <button className="WithdrawalButton" type="submit">submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Withdraw;