import React from 'react';
import { useNavigate } from 'react-router';
import { AlertTriangle } from 'lucide-react';

export const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[75vh] items-center justify-center p-6">
      <div className="surface max-w-md space-y-4 p-8 text-center">
        <AlertTriangle className="mx-auto h-12 w-12 text-amber-500" />
        <h2 className="text-lg font-bold text-foreground">An unexpected error occurred...</h2>
        <p className="text-xs text-muted-foreground">
          The requested route could not be found or is temporarily unavailable.
        </p>
        <button
          type="button"
          onClick={() => navigate('/portfolio')}
          className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Return to safety
        </button>
      </div>
    </div>
  );
};

export default Error;
