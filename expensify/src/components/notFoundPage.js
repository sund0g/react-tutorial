import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    // React Route Link method tells JavaScript to override server-side refresh with client-side refresh.
    <div>
        404 <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;
