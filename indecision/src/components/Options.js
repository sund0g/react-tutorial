import React from 'react';
import Option from './Option';

// Was a class; converted to stateless component

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">
                Your options
            </h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >
                Remove all
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
        {
            props.options.map((option) => (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
);

export default Options;
