import React, { Component, Fragment } from 'react';
import Header from '../../components/HomeHeader';
import HandShake from '../../assets/handshake.png';
import InsuredBy from '../../assets/Insuredby.png';
import Axa from '../../assets/AXA_Mansard_Solid_Blue_Logo_PNG.png';
import Fbn from '../../assets/fbninsurance.png';
import Leadway from '../../assets/LeadwayLogo.png';
import Greentrust from '../../assets/greentrustcompo.png';
import Button from '../../components/Button';
import LeftRightContainer from '../../components/LeftRightContainer';
import './Home.css';

class Home extends Component {

    render() {
        return (
            <Fragment>
                <img src={HandShake} className="Jumbotron" />
                <div className="Container">
                    <Header />
                </div>
                <Button title="GET STARTED" className="GetStarted" />
                <div className="Sponsors">
                    <img src={InsuredBy} alt="Insured by" />
                    <img src={Axa} alt="AXA MANSARD" />
                    <img src={Leadway} alt="LEADWAY" />
                    <img style={{ width: 150 }} src={Fbn} alt="FBNInsured" />
                </div>
                <div className="PoweredBy">
                    <img src={Greentrust} alt="Greentrust" />
                    <h3>Powered by TRUST</h3>
                    <div className="PoweredByText">
                        <p>Greentrust is Nigeria's most secured social commerce</p>
                        <p>payments platform from a counterparty risk perspective-</p>
                        <p>we protect both buyer and seller.</p>
                        <p>All funds are kept in trust till the</p>
                        <p>buyer and seller are satisfied</p>
                        <p>with the transaction.</p>
                        <Button title="GET STARTED" className="PoweredByBtn" />
                    </div>
                    <LeftRightContainer first />
                    <LeftRightContainer />
                    <div className="Now">
                        <p>Try GreenTrust Now</p>
                        <p>It takes 5 minutes to <br/> create account</p>
                        <Button color="white" className="GetStarted2" title="GET STARTED" />
                    </div>
                    <div className="Contact">
                        <div className="Email">
                            <h4>Contact</h4>
                            <a href="mailto:hello@greentrust.com.ng">hello@greentrust.com.ng</a>
                        </div>
                        <div className="Location">
                            <h4>Lagos</h4>
                            <p>2, Ondo street, Alapere, Ketu, Lagos</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home;

