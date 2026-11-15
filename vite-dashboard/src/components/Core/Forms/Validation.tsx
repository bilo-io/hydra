import React from 'react';

interface ValidationProps {
    error?: {
        message?: string,
    }
}

export const Validation: React.FC<ValidationProps> = ({ error }) => {
    return error ? (
        <p style={{ color: 'red', fontSize: '0.7rem', fontWeight: 'bold' }}>{error.message}</p>
    ) : null;
};

export default Validation;