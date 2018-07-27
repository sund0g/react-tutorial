import React from 'react';

// Was a class; converted to stateless component

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
)

export default Header;
