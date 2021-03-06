import React from 'react';

// Was a class; converted to stateless component

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            remove
        </button>
    </div>
)

export default Option; // Doing this instead of inline default for consts. Otherwise, in the React dev tools, calls to Option will be id'ed as 'unknown'.
