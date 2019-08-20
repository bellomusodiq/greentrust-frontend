import React, {Component} from 'react';
import Logo from '../../assets/greentrustwhite.png';
import './Login.css';
import {Link} from 'react-router-dom';


class Login extends Component {

    render() {
        return (
            <div className="Login">
                <img src={Logo} alt="Logo" />
                <form action="post" className="Loginform">
                    <h2>SIGN IN</h2>
                    <p style={{color: "#007F00"}}>Username or email</p>
                    <input className="Username" type="text"/>
                    <p style={{color: "#007F00"}}>Password</p>
                    <div>
                        <input className="Password" type="text"/>
                        <i className="ShowPassword">E</i>
                    </div>
                    <Link className="ForgetPassword" to="/" style={{textAlign: "right", margin: '10px 0'}}>Forget Password</Link>
                    <div className="LoginSubmit">
                        <button className="" type="submit">SIGN IN</button>
                    </div>
                    <p style={{color: "#007F00"}}>Not yet registered? <Link to="/signup">SIGN UP</Link></p>
                </form>
            </div>
        )
    }
}

export default Login;