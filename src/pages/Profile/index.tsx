import React from 'react';
import { useNavigate } from 'react-router';
import { ShieldCheck, KeyRound, Wallet, Globe, Settings, CheckCircle2 } from 'lucide-react';

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="chip mb-2">Verified Institutional Account</span>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Profile</h1>
          <p className="text-sm text-muted-foreground">
            Identity verification status, security keys, and connected settlement accounts.
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigate('/settings')}
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          <Settings className="h-4 w-4" />
          <span>Edit Preferences</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="surface flex flex-col justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 font-mono text-xl font-bold text-primary">
              BL
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">Bilo Lwabona</h2>
              <p className="text-xs text-muted-foreground">Principal Portfolio Manager</p>
              <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-emerald-500">
                <CheckCircle2 className="h-3.5 w-3.5" /> Tier-3 KYC Verified
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-2.5 border-t border-border pt-4 text-xs">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Account ID</span>
              <span className="font-mono text-foreground">HYD-8841-ZA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Base Currency</span>
              <span className="font-mono text-foreground">USD / ZAR</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Fee Tier</span>
              <span className="font-mono text-primary">VIP Maker (0.05%)</span>
            </div>
          </div>
        </div>

        <div className="surface space-y-4 p-6 lg:col-span-2">
          <h2 className="text-base font-semibold text-foreground">Security & Settlement Rails</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border/70 bg-background/60 p-4">
              <ShieldCheck className="h-5 w-5 text-emerald-500" />
              <div className="mt-2 text-sm font-semibold text-foreground">Hardware 2FA</div>
              <p className="mt-1 text-xs text-muted-foreground">
                YubiKey & passkey signing enforced on all withdrawals.
              </p>
            </div>
            <div className="rounded-xl border border-border/70 bg-background/60 p-4">
              <Wallet className="h-5 w-5 text-primary" />
              <div className="mt-2 text-sm font-semibold text-foreground">Multi-Sig Vault</div>
              <p className="mt-1 text-xs text-muted-foreground">
                3-of-5 cold storage quorum active for BTC and ETH reserves.
              </p>
            </div>
            <div className="rounded-xl border border-border/70 bg-background/60 p-4">
              <KeyRound className="h-5 w-5 text-violet-500" />
              <div className="mt-2 text-sm font-semibold text-foreground">API Keys</div>
              <p className="mt-1 text-xs text-muted-foreground">
                2 read-only telemetry keys active · 0 withdrawal keys.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border/70 bg-muted/40 px-4 py-3 text-xs">
            <span className="flex items-center gap-2 text-foreground">
              <Globe className="h-4 w-4 text-primary" />
              <span>Primary Settlement Region: Cape Town / Zurich</span>
            </span>
            <span className="font-mono text-emerald-500">Status: Operational</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
