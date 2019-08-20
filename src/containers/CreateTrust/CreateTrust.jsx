import React, {Component, Fragment} from 'react';
import './CreateTrust.css';
import Header from './CreateTrustHeader';

class CreateTrust extends Component {

    render() {
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
            </Fragment>
        )
    }
}

export default CreateTrust;