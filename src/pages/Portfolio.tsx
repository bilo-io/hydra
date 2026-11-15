import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { ArrowUpRight, ArrowDownRight, Wallet, TrendingUp, Layers, ArrowLeftRight } from 'lucide-react';
import { Text, View } from '../components/Core';
import coins from 'assets/crypto';

const HOLDINGS = [
  { code: 'BTC', name: 'Bitcoin', units: 1.5, valueUsd: 96450.0, change24h: 3.42, allocation: 54 },
  { code: 'ETH', name: 'Ethereum', units: 14.2, valueUsd: 48280.0, change24h: 2.18, allocation: 27 },
  { code: 'USDC', name: 'USD Coin', units: 21500.0, valueUsd: 21500.0, change24h: 0.01, allocation: 12 },
  { code: 'MATIC', name: 'Polygon', units: 1650.0, valueUsd: 12540.0, change24h: -1.14, allocation: 7 },
];

export const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const totalValue = HOLDINGS.reduce((acc, h) => acc + h.valueUsd, 0);

  return (
    <View isPage className="w-full space-y-6 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="chip mb-2">Hydra Wealth Desk</span>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            <Text className="text-2xl font-bold">{t('portfolio')}</Text>
          </h1>
          <p className="text-sm text-muted-foreground">
            Multi-asset balance, allocation breakdown, and active performance across wallets.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => navigate('/trade')}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            <ArrowLeftRight className="h-4 w-4" />
            <span>Quick Trade</span>
          </button>
          <button
            type="button"
            onClick={() => navigate('/transactions')}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <span>Ledger</span>
          </button>
        </div>
      </div>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="surface p-5">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span>Total Portfolio Value</span>
            <Wallet className="h-4 w-4 text-primary" />
          </div>
          <div className="mt-2 font-mono text-3xl font-bold text-foreground">
            ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
          <div className="mt-2 flex items-center gap-1 text-xs font-medium text-emerald-500">
            <ArrowUpRight className="h-3.5 w-3.5" />
            <span>+$4,290.40 (+2.46%) past 24h</span>
          </div>
        </div>

        <div className="surface p-5">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span>24h Realized P&L</span>
            <TrendingUp className="h-4 w-4 text-emerald-500" />
          </div>
          <div className="mt-2 font-mono text-3xl font-bold text-foreground">+$1,842.15</div>
          <div className="mt-2 text-xs text-muted-foreground">
            Across 6 executed spot & bundle orders
          </div>
        </div>

        <div className="surface p-5">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span>Active Assets</span>
            <Layers className="h-4 w-4 text-primary" />
          </div>
          <div className="mt-2 font-mono text-3xl font-bold text-foreground">{HOLDINGS.length}</div>
          <div className="mt-2 text-xs text-muted-foreground">
            81% Core Layer-1 · 12% Stablecoins · 7% Alt
          </div>
        </div>
      </div>

      {/* Allocation Bar */}
      <div className="surface p-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">Asset Allocation</h2>
          <span className="text-xs text-muted-foreground">Rebalanced 2h ago</span>
        </div>
        <div className="flex h-3 w-full overflow-hidden rounded-full bg-muted">
          <div className="bg-blue-500" style={{ width: '54%' }} title="Bitcoin 54%" />
          <div className="bg-violet-500" style={{ width: '27%' }} title="Ethereum 27%" />
          <div className="bg-emerald-500" style={{ width: '12%' }} title="USDC 12%" />
          <div className="bg-pink-500" style={{ width: '7%' }} title="Polkadot 7%" />
        </div>
        <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
          {HOLDINGS.map((h) => (
            <div key={h.code} className="flex items-center gap-1.5">
              <span className="font-semibold text-foreground">{h.code}</span>
              <span>{h.allocation}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Holdings Table */}
      <div className="surface overflow-hidden">
        <div className="border-b border-border px-5 py-4">
          <h2 className="text-base font-semibold text-foreground">Holdings Breakdown</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-5 py-3">Asset</th>
                <th className="px-5 py-3">Balance</th>
                <th className="px-5 py-3">Value (USD)</th>
                <th className="px-5 py-3">24h Change</th>
                <th className="px-5 py-3">Share</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {HOLDINGS.map((asset) => {
                // @ts-ignore
                const icon = coins?.[asset.code]?.icon;
                const positive = asset.change24h >= 0;
                return (
                  <tr
                    key={asset.code}
                    onClick={() => navigate(`/explore/${asset.name.toLowerCase()}`)}
                    className="cursor-pointer transition-colors hover:bg-muted/40"
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        {icon && <img src={icon} alt={asset.code} className="h-7 w-7 rounded-full" />}
                        <div>
                          <div className="font-semibold text-foreground">{asset.name}</div>
                          <div className="text-xs text-muted-foreground">{asset.code}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 font-mono text-foreground">
                      {asset.units.toLocaleString('en-US')} {asset.code}
                    </td>
                    <td className="px-5 py-3.5 font-mono font-semibold text-foreground">
                      ${asset.valueUsd.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          positive
                            ? 'bg-emerald-500/15 text-emerald-500'
                            : 'bg-rose-500/15 text-rose-500'
                        }`}
                      >
                        {positive ? (
                          <ArrowUpRight className="h-3 w-3" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3" />
                        )}
                        {positive ? '+' : ''}
                        {asset.change24h}%
                      </span>
                    </td>
                    <td className="px-5 py-3.5 font-mono text-muted-foreground">
                      {asset.allocation}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </View>
  );
};

export default Portfolio;
