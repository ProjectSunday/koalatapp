import React from 'react';

export default ({ location }) => (
    <div>
        <h3>
          No Match for <code>{location.pathname}</code>
        </h3>
    </div>
);
