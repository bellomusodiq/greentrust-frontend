import React, { Fragment } from 'react';

const leftright = props => {
    let comp = (
        <Fragment>
            <div>
                {props.children}
            </div>
            <div></div>
        </Fragment>
    )
    if (props.right) {
        comp = (
            <Fragment>
                <div></div>
                <div>
                    {props.children}
                </div>
            </Fragment>
        )
    }
    return (
        <div className="LeftRight">
            {comp}
        </div>
    )
}

export default leftright;