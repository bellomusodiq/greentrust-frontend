import React from 'react';
import './LoginSignupBtn.css';

const btn = props => {
    let btnProps = {
        backgroundColor: "#007F00",
        color: "#f1f1f1",
        borderColor: "#007F00",
    };
    if (props.color === "white") {
        btnProps = {
            backgroundColor: "#f1f1f1",
            color: "#007F00",  
            borderColor: "#F1F1F1",
        };
    }
    return (
        <button className={props.className?"LoginSignupBtn "+props.className:"LoginSignupBtn"} style={btnProps}>
            {props.title}
        </button>
    )
}

export default btn;