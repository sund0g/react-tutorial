// Stateless functional component

import React from 'react';

const Header = (props) => { // Was a class; converted to stateless component
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

export default Header;
