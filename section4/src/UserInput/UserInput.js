import React from 'react';

const userinput = (props) => {
    return (
        <input type="text" value={props.name} 
        onClick={props.click} />
    );
}

export default userinput;