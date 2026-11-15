import React from 'react';
import { useNavigate } from 'react-router';
import { X, Home, User, Info, LogOut } from 'lucide-react';
import pkg from '../../../package.json';

function AppMenu({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  isDark?: boolean;
  onToggle: () => void;
}) {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const go = (path: string) => () => {
    navigate(path);
    onToggle();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-sm rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-xl">
        <button
          type="button"
          onClick={onToggle}
          aria-label="Close menu"
          className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex flex-col items-center text-center">
          <img src="/logo.svg" alt="Hydra" className="h-10 w-auto" />
          <p className="mt-2 text-xs text-muted-foreground">
            Unified Crypto Portfolio & Market Suite · v{pkg.version}
          </p>
        </div>

        <div className="mt-6 space-y-1.5">
          <button
            type="button"
            onClick={go('/portfolio')}
            className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <Home className="h-4 w-4 text-primary" />
            <span>Home / Portfolio</span>
          </button>
          <button
            type="button"
            onClick={go('/profile')}
            className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <User className="h-4 w-4 text-primary" />
            <span>Account Profile</span>
          </button>
          <button
            type="button"
            onClick={go('/settings')}
            className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <Info className="h-4 w-4 text-primary" />
            <span>Settings & Preferences</span>
          </button>
          <button
            type="button"
            onClick={go('/login')}
            className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10"
          >
            <LogOut className="h-4 w-4" />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppMenu;
