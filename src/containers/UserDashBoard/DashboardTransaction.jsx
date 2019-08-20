import React, {Component} from 'react';
import Button from '../../components/Button';

class Transaction extends Component {

    render() {
        return (
            <div className="DashboardTransaction">
                <div className="TrasactionLogHeader">
                    <h3>Trasaction Log</h3>
                    <Button title="Export CSV" className="csvButton" />
                </div>
                <div className="TransactionLogTable">
                    <div className="TransactionLogHeading">
                        <h4>SN</h4>
                        <h4>Transaction ID</h4>
                        <h4>Details</h4>
                        <h4>Amount</h4>
                        <h4>Balance</h4>
                        <h4>Time</h4>
                    </div>
                    <div className="Divider"></div>
                    <div className="TransactionLogRow">
                        <div className="">1</div>
                        <div className="" style={{color: "red"}}>TXFG2351afFereaDWEIR343</div>
                        <div className="" style={{color: 'red'}}>Withdrawal via bank deposit</div>
                        <div className="" style={{color: 'red'}}>1000 NGN</div>
                        <div className="" style={{color: 'red'}}>20000 NGN</div>
                        <div className="" style={{color: 'red'}}>15 Jul, 2019 12:03 AM</div>
                    </div>
                    <div className="TransactionLogRow">
                        <div className="">2</div>
                        <div className="" style={{color: "red"}}>TXFG2351afFereaDWEIR343</div>
                        <div className="" style={{color: 'red'}}>Withdrawal via bank deposit</div>
                        <div className="" style={{color: 'red'}}>1000 NGN</div>
                        <div className="" style={{color: 'red'}}>20000 NGN</div>
                        <div className="" style={{color: 'red'}}>15 Jul, 2019 12:03 AM</div>
                    </div>
                    <div className="TransactionLogRow">
                        <div className="">3</div>
                        <div className="" style={{color: "#007F00"}}>TXFG2351afFereaDWEIR343</div>
                        <div className="" style={{color: '#007F00'}}>Trust amount released from Ajanaku</div>
                        <div className="" style={{color: '#007F00'}}>1000 NGN</div>
                        <div className="" style={{color: '#007F00'}}>20000 NGN</div>
                        <div className="" style={{color: '#007F00'}}>15 Jul, 2019 12:03 AM</div>
                    </div>
                    <div className="TransactionLogRow">
                        <div className="">4</div>
                        <div className="" style={{color: "#007F00"}}>TXFG2351afFereaDWEIR343</div>
                        <div className="" style={{color: '#007F00'}}>Trust amount released from Ajanaku</div>
                        <div className="" style={{color: '#007F00'}}>1000 NGN</div>
                        <div className="" style={{color: '#007F00'}}>20000 NGN</div>
                        <div className="" style={{color: '#007F00'}}>15 Jul, 2019 12:03 AM</div>
                    </div>
                    <div className="TransactionLogRow">
                        <div className="">5</div>
                        <div className="" style={{color: "red"}}>TXFG2351afFereaDWEIR343</div>
                        <div className="" style={{color: 'red'}}>Withdrawal via bank deposit</div>
                        <div className="" style={{color: 'red'}}>1000 NGN</div>
                        <div className="" style={{color: 'red'}}>20000 NGN</div>
                        <div className="" style={{color: 'red'}}>15 Jul, 2019 12:03 AM</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Transaction;