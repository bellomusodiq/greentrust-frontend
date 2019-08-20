import React, {Component} from 'react';
import Logo from '../../assets/greentrustwhite.png';
import './Signup.css';
import {Link} from 'react-router-dom';


class Signup extends Component {

    render() {
        return (
            <div className="Signup">
                <img src={Logo} alt="Logo" />
                <form action="post" className="Signupform">
                    <h2>SIGN UP</h2>
                    <input className="" placeholder="Firstname Lastname" type="text"/>
                    <input className="Username" placeholder="Username" type="text"/>
                    <input className="Email" placeholder="Email" type="email"/>
                    <input className="Phonenumber" placeholder="Phone number eg. 23480123456" type="phone"/>
                    <div>
                        <input className="Password" placeholder="Password" type="password"/>
                        <i className="ShowPassword">E</i>
                    </div>
                    <div>
                        <input className="Password" placeholder="Confirm Password" type="password"/>
                        <i className="ShowPassword">E</i>
                    </div>
                    <Link className="ForgetPassword" to="/" style={{textAlign: "right", margin: '10px 0'}}>Forget Password</Link>
                    <div className="SignupSubmit">
                        <button className="" type="submit">SIGN UP</button>
                    </div>
                    <p style={{color: "#007F00"}}>Already registered? <Link to="/login">Login</Link></p>
                </form>
            </div>
        )
    }
}

export default Signup;