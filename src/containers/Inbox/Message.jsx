import React from 'react';

const message = props => {

    return (
        <div className="Message">
            <p>{props.message}</p>
            <div>
                <span>{props.user}</span><span>{props.time}</span>
            </div>
        </div>
    )
}

export default message;