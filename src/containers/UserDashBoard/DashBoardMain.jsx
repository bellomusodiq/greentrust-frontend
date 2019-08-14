import React, {Component} from 'react';

class DashBoardMain extends Component {
    state = {
        current: "Notification"
    }
    render() {
        let currentTab = null;
        if (this.state.current === "Notification") {
            currentTab = (
                <div className="NotificationTable">
                    <div style={{background: 'rgb(236, 236, 236)'}} className="NotificationRow">
                        <div className="pimg">pimg</div>
                        <div className="NotificationDesc">
                            <p>Ajanaku sent you an order</p>
                            <p>2d</p>
                        </div>
                        <div className="AcceptReject">
                            <button className="Accept">Accept</button>
                            <button className="Reject">Reject</button>
                        </div>
                    </div>
                    <div className="NotificationRow">
                        <div className="pimg">pimg</div>
                        <div className="NotificationDesc">
                            <p>Ajanaku sent you an order</p>
                            <p>2d</p>
                        </div>
                        <div className="AcceptReject">
                            <button className="Accept">Accept</button>
                            <button className="Reject">Reject</button>
                        </div>
                    </div>
                    <div style={{background: 'rgb(236, 236, 236)'}} className="NotificationRow">
                        <div className="pimg">pimg</div>
                        <div className="NotificationDesc">
                            <p>Ajanaku sent you an order</p>
                            <p>2d</p>
                        </div>
                        <div className="AcceptReject">
                            <button className="Accept">Accept</button>
                            <button className="Reject">Reject</button>
                        </div>
                    </div>
                </div>
            )
        }
        if (this.state.current === "Messages") {
            currentTab = (
                <div className="MessagesTable">
                    Messages Table here
                </div>
            )
        }
        if (this.state.current === "Transaction") {
            currentTab = (
                <div className="TransactionTable">
                    Transaction Table here
                </div>
            )
        }
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
                <div className="NotificationsMessages">
                    <div
                    onClick={() => this.setState({current: "Notification"})} 
                    className="Notification-nav">
                        <span style={{color: this.state.current==="Notification"?'#015c01':null, 
                    }}>Notifications</span>    
                        {this.state.current==="Notification"?<div className="Underline"></div>:null}
                    </div><hr/>
                    <div
                    onClick={() => this.setState({current: "Messages"})} 
                    className="Message-nav">
                        <span style={{color: this.state.current==="Messages"?'#015c01':null, 
                    }}>Messages</span>    
                        {this.state.current==="Messages"?<div className="Underline"></div>  :null}  
                    </div><hr/>
                    <div
                    onClick={() => this.setState({current: "Transaction"})} 
                    className="Transaction-nav">
                        <span style={{color: this.state.current==="Transaction"?'#015c01':null, 
                    }}>Transaction Log</span>    
                        {this.state.current==="Transaction"?<div className="Underline"></div>:null}
                    </div>
                </div>
                {currentTab}
            </div>
        )
    }
}

export default DashBoardMain;