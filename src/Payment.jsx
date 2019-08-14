import React, { Component } from 'react';
//import the library
import PaystackButton from 'react-paystack';
import './Payment.css';

class App extends Component {

    state = {
        key: "pk_test_d3f01ffa7bdb152e694edb9cdb174138e1da33aa", //PAYSTACK PUBLIC KEY
        email: "djangpro1212@gmail.com",  // customer email
        amount: 10000 //equals NGN100,
    }

    callback = (response) => {
        console.log(response); // card charged successfully, get reference here
    }

    close = () => {
        console.log("Payment closed");
    }

    getReference = () => {
        //you can put any unique reference implementation code here
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

            for( let i=0; i < 30; i++ )
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }

    render() {
    return (
        <div className="Payment">
            <div>
            <PaystackButton
            text="Make Payment"
            className="payButton"
            callback={this.callback}
            close={this.close}
            disabled={true}
            embed={true} 
            reference={this.getReference()}
            email={this.state.email}
            amount={this.state.amount}
            paystackkey={this.state.key}
            tag="button"
            />
            </div>
        </div>
    );
    }
}

export default App;