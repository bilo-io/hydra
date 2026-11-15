import React from 'react';

interface ValidationProps {
  error?: {
    message?: string;
  };
}

export const Validation: React.FC<ValidationProps> = ({ error }) => {
  return error ? (
    <p className="mt-1 text-xs font-medium text-destructive">{error.message}</p>
  ) : null;
};

export default Validation;
