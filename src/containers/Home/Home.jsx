import React, {Component, Fragment} from 'react';
import Header from '../../components/HomeHeader';
import HandShake from '../../assets/handshake.png';

class Home extends Component {

    render(){
        return (
            <Fragment>
                <img src={HandShake} className="Jumbotron" />
                <div className="Container">
                    <Header />
                </div>
            </Fragment>
        )
    }
}

export default Home;