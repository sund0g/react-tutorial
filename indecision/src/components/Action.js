// Stateless functional component

import React from 'react';

const Action = (props) => { // Was a class; converted to stateless component
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

export default Action
