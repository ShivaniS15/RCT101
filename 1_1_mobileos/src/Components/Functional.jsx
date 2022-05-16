import React from 'react';

const Functional = (props) => {
    return (
        <div>
            <ul type="bullet">
                <li> {props.os}</li>
            </ul>
        </div>
        
    )
};

const Functional1 = (props) => {
    return (
        <div>
            <ul type="bullet">
                <li> {props.mm}</li>
            </ul>
        </div>
        
    )
}

export default Functional;
export {Functional1}