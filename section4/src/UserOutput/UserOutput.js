import React from 'react';

const useroutput = (props) => {
    return (
    <div>
        <p onClick={props.click}>The username is: {props.name} </p>
        <p>2nd output</p>
    </div>
);
}

export default useroutput;