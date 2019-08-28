import React, {Component} from 'react';
import Websocket from 'react-websocket';
import { connect } from "react-redux";
import {updateData} from '../store/actions';
import {UPDATE_DATA} from '../store/actionTypes';

class Ws extends Component {
  componentDidMount() {
  }
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
    render() {
      if (this.props.send){
        this.sendMessage("testing websocket send")
      }
        return (
      <Websocket url="ws://localhost:8000/messages/mayowa/1"
          onMessage={this.message}
          onOpen={this.opened}
          ref={Websocket => {
              this.refWebSocket = Websocket;
            }}
        />
        )
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Ws);
