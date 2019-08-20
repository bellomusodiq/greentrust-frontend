import React, {Component} from 'react';
import { Link } from "react-router-dom";
import ProfileImage from "../../assets/p_image.jpg";

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
                        <div className="pimg"><img src={ProfileImage} alt="Profile Image" /></div>
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
                        <div className="pimg"><img src={ProfileImage} alt="Profile Image" /></div>
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
                        <div className="pimg"><img src={ProfileImage} alt="Profile Image" /></div>
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
                <div className="NotificationTable">
                    <div style={{background: 'rgb(236, 236, 236)'}} className="NotificationRow notificationRow">
                        <div className="pimg"><img src={ProfileImage} alt="Profile Image" /></div>
                        <div className="">
                            <p>Bello Mayowa</p>
                        </div>
                        <div className="AcceptReject">
                            <p>I want to make an enquiry on your ...</p>
                        </div>
                        <div style={{marginRight: 10}}>
                            <p>12/06/20</p>
                        </div>
                    </div>
                    <div className="NotificationRow notificationRow">
                        <div className="pimg"><img src={ProfileImage} alt="Profile Image" /></div>
                        <div className="">
                            <p>Bello Mayowa</p>
                        </div>
                        <div className="AcceptReject">
                            <p>I want to make an enquiry on your ...</p>
                        </div>
                        <div style={{marginRight: 10}}>
                            <p>12/06/20</p>
                        </div>
                    </div>
                    <div style={{background: 'rgb(236, 236, 236)'}} className="NotificationRow notificationRow">
                        <div className="pimg"><img src={ProfileImage} alt="Profile Image" /></div>
                        <div className="">
                            <p>Bello Mayowa</p>
                        </div>
                        <div className="AcceptReject">
                            <p>I want to make an enquiry on your ...</p>
                        </div>
                        <div style={{marginRight: 10}}>
                            <p>12/06/20</p>
                        </div>
                    </div>
                    <div className="NotificationRow notificationRow">
                        <div className="pimg"><img src={ProfileImage} alt="Profile Image" /></div>
                        <div className="">
                            <p>Bello Mayowa</p>
                        </div>
                        <div className="AcceptReject">
                            <p>I want to make an enquiry on your ...</p>
                        </div>
                        <div style={{marginRight: 10}}>
                            <p>12/06/20</p>
                        </div>
                    </div>
                </div>
            )
        }
        if (this.state.current === "Transaction") {
            currentTab = (
                <div className="TransactionTable">
                    <div className="TransactionRow">
                        <div className="Heading">SN</div>
                        <div className="Heading">Transaction Id</div>
                        <div className="Heading">Details</div>
                        <div className="Heading">Amount</div>
                        <div className="Heading">Time</div>
                    </div>
                    <br/>
                    <div className="TransactionRow">
                        <div className="SN">1</div>
                        <div className="TransactionId" style={{color: "red"}}>TXFG2351afFereaDWEIR343</div>
                        <div className="TransactionDetails" style={{color: 'red'}}>Withdrawal via bank deposit</div>
                        <div className="TransactionAmount" style={{color: 'red'}}>1000 NGN</div>
                        <div className="TransactionTime" style={{color: 'red'}}>15 Jul, 2019 12:03 AM</div>
                    </div>
                    <div className="TransactionRow">
                        <div className="SN">2</div>
                        <div className="TransactionId" style={{color: "#007F00"}}>TXFG2351afFereaDWEIR343</div>
                        <div className="TransactionDetails" style={{color: "#007F00"}}>Trust amount released from Ajanaku</div>
                        <div className="TransactionAmount" style={{color: "#007F00"}}>1000 NGN</div>
                        <div className="TransactionTime" style={{color: "#007F00"}}>15 Jul, 2019 12:03 AM</div>
                    </div>
                    <div className="TransactionRow">
                        <div className="SN">3</div>
                        <div className="TransactionId" style={{color: 'red'}}>TXFG2351afFereaDWEIR343</div>
                        <div className="TransactionDetails" style={{color: 'red'}}>Withdrawal via bank deposit</div>
                        <div className="TransactionAmount" style={{color: 'red'}}>1000 NGN</div>
                        <div className="TransactionTime" style={{color: 'red'}}>15 Jul, 2019 12:03 AM</div>
                    </div>
                    <div className="TransactionRow">
                        <div className="SN">4</div>
                        <div className="TransactionId" style={{color: "#007F00"}}>TXFG2351afFereaDWEIR343</div>
                        <div className="TransactionDetails" style={{color: "#007F00"}}>Trust amount released from Ajanaku</div>
                        <div className="TransactionAmount" style={{color: "#007F00"}}>1000 NGN</div>
                        <div className="TransactionTime" style={{color: "#007F00"}}>15 Jul, 2019 12:03 AM</div>
                    </div>
                    <div className="SeeFull">
                        <Link to="/dashboard/transactions">See full</Link>
                    </div>
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