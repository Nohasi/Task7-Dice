import React from 'react';

export const ErrorMessage = ({errorMessage}: {errorMessage: string}) => {
    return (
        <div className="blink">
            <h1>{errorMessage}</h1>
        </div>
    );
}