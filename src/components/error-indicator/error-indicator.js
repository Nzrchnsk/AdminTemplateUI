import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className="boom">Error!</span>
            <span>
        something has gone terribly wrong
      </span>
            <span>
        (but we already work to fix it)
      </span>
        </div>
    );
};

export default ErrorIndicator;
