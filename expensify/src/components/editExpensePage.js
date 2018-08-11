import React from 'react';

// Note that React Router does pass properties in, and we can use these.
// These properties are only available to components inside the route. In our App
// the Header component does not have access because it is not inside the route.

const EditExpensePage = (props) => (
    <div>
        Editing expense with id of: {props.match.params.id}
    </div>
);

export default EditExpensePage;
