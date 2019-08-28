import React, {Component} from 'react';
import './Settings.css';

class Settings extends Component {

    render() {
        return (
            <div className="Settings">
                <div className="FirstLastName">
                    <div className="FirstName">
                        <p>Firstname</p>
                        <input type="text" />
                    </div>
                    <div className="Lastname">
                        <p>Lastname</p>
                        <input type="text" />
                    </div>
                </div>
                <div className="UsernameEmail">
                    <div className="Username">
                        <p>Username</p>
                        <input type="text" name="" id=""/>
                    </div>
                    <div className="Email">
                        <p>Email</p>
                        <input type="text"/>
                    </div>
                </div>
                <div className="Phonenumber">
                    <p>Phonenumber</p>
                    <input type="text"/>
                </div>
                <div className="Address">
                    <p>Address</p>
                    <input type="text"/>
                </div>
                <div className="DeleteAccount">
                    <p>Delete your account</p>
                </div>
            </div>
        )
    }
}

export default Settings; 