import React from 'react';
import { useNavigate } from 'react-router';

export function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[80vh] items-center justify-center p-6">
      <div className="surface w-full max-w-md space-y-6 p-8 text-center">
        <img src="/logo.svg" alt="Hydra" className="mx-auto h-12 w-auto" />
        <div>
          <h1 className="text-xl font-bold text-foreground">Sign in to Hydra</h1>
          <p className="mt-1 text-xs text-muted-foreground">
            Access your unified portfolio, trading desk, and analytics workspace.
          </p>
        </div>

        <div className="space-y-3">
          <button
            type="button"
            onClick={() => navigate('/portfolio')}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Continue with SSO / Passkey
          </button>
          <button
            type="button"
            onClick={() => navigate('/explore')}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Browse Markets as Guest
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
