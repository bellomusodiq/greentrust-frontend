import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Payment from './Payment';
import UserDashboard from './containers/UserDashBoard/UserDashboard';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import CreateTrust from './containers/CreateTrust/CreateTrust';
import Inbox from './containers/Inbox/Inbox';
import Websocket from 'react-websocket';
import { connect } from "react-redux";
import {updateData} from './store/actions';
import {UPDATE_DATA} from './store/actionTypes';
import axios from 'axios';


class App extends Component {



  opened = (response) => {
    console.log(response)
  }
  message = (response) => {
      console.log(response)
      this.props.onUpdateData(response)
  }
  sendMessage(message){
      this.refWebSocket.sendMessage(JSON.stringify({message: message}));
  }
  // componentDidMount() {
  // const headers = {
  //   cookie: "bdJYUAxq1fdV3l67mt0W" 
  // }
  // const data = {
  //       origin_destinations: [
  //         {
  //             departure_city: "LOS",
  //             destination_city: "DXB",
  //             departure_date: "12/26/2019",
  //             return_date: ""
  //         }
  //     ],
  //     search_param: {
  //         no_of_adult: 1,
  //         no_of_child: 1,
  //         no_of_infant: 0,
  //         preferred_airline_code : "",
  //         calendar : false,
  //         cabin: "All"
  //     }
  //   }
  //   axios.post('http://www.ije-api.tcore.xyz/v1/flight/search-flight', data, {withCredentials: true,headers: headers})
  //   .then(res => console.log(res.data))
  // }
  render() {
    return (
      <div className="App">
      <Websocket url="ws://localhost:8000/messages/mayowa/1"
          onMessage={this.message}
          onOpen={this.opened}
          ref={Websocket => {
              this.refWebSocket = Websocket;
            }}
        />
      <Router>
        <Switch>
          <Route path="/payment" component={Payment} />
          <Route path="/dashboard" component={UserDashboard} />
          <Route path="/create-trust" component={CreateTrust} />
          <Route path="/inbox/:id" render={() => <Inbox sendMessage={(message) => this.sendMessage(message)} />} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateData: (data) => dispatch({type: UPDATE_DATA, payload: updateData(data)})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
