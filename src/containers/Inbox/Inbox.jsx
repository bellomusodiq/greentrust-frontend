import React, {Component} from 'react';
import './Inbox.css';
import Header from '../UserDashBoard/DashBoardHeader';
import SideNav from './SideNav';
import Message from './Message';
import Button from '../../components/Button';
import WebSocket from 'react-websocket';
import { connect } from "react-redux";

class Inbox extends Component {
    state = {
        message: '',
        messages: [
            {
                id: 1,
                user: "Mayowa",
                message: "This is a test message, this is a test message, this is a test message",
                timestamp: "2019-09-09 12:00PM",
            },
            {
                id: 2,
                user: "Mayowa",
                message: "This is a test message, this is a test message, this is a test message",
                timestamp: "2019-09-09 12:00PM",
            },
            {
                id: 3,
                user: "Mayowa",
                message: "This is a test message, this is a test message, this is a test message",
                timestamp: "2019-09-09 12:00PM",
            },
            {
                id: 4,
                user: "Mayowa",
                message: "This is a test message, this is a test message, this is a test message",
                timestamp: "2019-09-09 12:00PM",
            },
            {
                id: 5,
                user: "Mayowa",
                message: "This is a test message, this is a test message, this is a test message",
                timestamp: "2019-09-09 12:00PM",
            },
            {
                id: 6,
                user: "Mayowa",
                message: "This is a test message, this is a test message, this is a test message",
                timestamp: "2019-09-09 12:00PM",
            },
            {
                id: 7,
                user: "Mayowa",
                message: "This is a test message, this is a test message, this is a test message",
                timestamp: "2019-09-09 12:00PM",
            },
            {
                id: 7,
                user: "Mayowa",
                message: "This is a test message, this is a test message, this is a test message",
                timestamp: "2019-09-09 12:00PM",
            },
            {
                id: 7,
                user: "Mayowa",
                message: "This is a test message, this is a test message, this is a test message",
                timestamp: "2019-09-09 12:00PM",
            },
            {
                id: 7,
                user: "Mayowa",
                message: "This is a test message, this is a test message, this is a test message",
                timestamp: "2019-09-09 12:00PM",
            },
            {
                id: 7,
                user: "Mayowa",
                message: "This is a test message, this is a test message, this is a test message",
                timestamp: "2019-09-09 12:00PM",
            },
            {
                id: 7,
                user: "Mayowa",
                message: "This is a test message, this is a test message, this is a test message",
                timestamp: "2019-09-09 12:00PM",
            },
            {
                id: 7,
                user: "Mayowa",
                message: "This is a test message, this is a test message, this is a test message",
                timestamp: "2019-09-09 12:00PM",
            },
            {
                id: 7,
                user: "Mayowa",
                message: "This is a test message, this is a test message, this is a test message",
                timestamp: "2019-09-09 12:00PM",
            },
        ]
    }
    onSendMessage = e => {
        e.preventDefault();
        this.sendMessage()
    }
    opened = (response) => {
        console.log(response)
        this.sendMessage('hello')
    }
    message = (response) => {
        console.log(response)
    }
    sendMessage(message){
        this.refWebSocket.sendMessage(JSON.stringify({userId: 1, "connect": true}));
    }
    submitMessage = (e) => {
        e.preventDefault();
        this.props.sendMessage(this.state.message)
    }
    render() {
        
        let messages = null;
        if (this.state.messages) {
            messages = this.state.messages.map((message, i) => {
                return <Message key={i} message={message.message} user={message.user} time={message.timestamp} />
            })
        }
        return (
            <div className="Inbox">
                
                <Header />
                <div className="InboxArea">
                    <SideNav />
                    <div className="TextArea">
                        <div className="MessageArea">
                            {messages}
                        </div>
                        <form className="InboxForm" onSubmit={this.sendMessage}>
                            <textarea autoFocus value={this.state.message} name="" onChange={e => this.setState({message: e.target.value})} 
                            cols="30" rows="10"></textarea>
                            <button onClick={this.submitMessage} type="submit">send</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(Inbox);