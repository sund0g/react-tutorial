import React from 'react';

const Option = (props) => { // Was a class; converted to stateless component
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
};

export default Option; // Doing this instead of inline default for consts. Otherwise, in the React dev tools, calls to Option will be id'ed as 'unknown'.
