import React, {Component, Fragment} from 'react';
import './CreateTrust.css';
import Header from './CreateTrustHeader';
import { Route } from "react-router-dom";

class CreateTrust extends Component {
    state = {
        finalze: true
    }
    render() {
        let finalize = null;
        if(this.state.finalze) {
            finalize = (
                <Fragment>
                   <h4>Buyers Detail</h4>
                   <p>Email Adress</p>
                   <input className="FinalDetail" type="email" name="" id=""/><br/>
                   <p>Phone Number</p>
                   <input className="FinalDetail" type="number" name="" id=""/><br/><br/>
                   <input className="" id="Cbo1" type="checkbox" /> <label htmlFor="Cbo1d">I accept Grentrust Terms and Condition</label>
                </Fragment>
            )
        }
        return (
            <Fragment>
                <Header />
                <div className="CreateTrust">
                    <h1>Create Trust</h1>
                    <form action="" className="TrustForm">
                        <div className="IamBuying">
                            <div className="Iam">I am</div>
                            <select value="">
                                <option name="Buying" id="">Buying</option>
                                <option name="Selling" id="">Selling</option>
                            </select>
                            <select value="">
                                <option name="" id="">Chose here</option>
                                <option name="" id="">Chose here</option>
                                <option name="" id="">Chose here</option>
                                <option name="" id="">Chose here</option>
                                <option name="" id="">Chose here</option>
                            </select>
                        </div>
                        <br/>
                        <div className="ItemName">
                            <input style={{marginRight: 10, width: 300}} type="text" placeholder='Item title eg. LG 42" TV'/>
                            <select value="">
                                <option name="" id="">NGN</option>
                            </select>
                            <input type="text" className="Amount" placeholder="Amount" />
                        </div>
                    </form>
                </div>
                <br/>
                {finalize}
            </Fragment>
        )
    }
}

export default CreateTrust;