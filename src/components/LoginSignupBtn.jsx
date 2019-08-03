import React from 'react';
import './LoginSignupBtn.css';

const btn = props => {
    let btnProps = {
        backgroundColor: "#3FAF3F",
        color: "#f1f1f1",
        borderColor: "#3FAF3F",
    };
    if (props.color === "white") {
        btnProps = {
            backgroundColor: "#f1f1f1",
            color: "#3FAF3F",  
            borderColor: "#F1F1F1",
        };
    }
    return (
        <button className="LoginSignupBtn" style={btnProps}>
            {props.title}
        </button>
    )
}

export default btn;