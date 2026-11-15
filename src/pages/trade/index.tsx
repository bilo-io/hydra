import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowDownUp, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { Text, View } from '../../components/Core';
import coins from 'assets/crypto';

const PAIRS = [
  { code: 'BTC', name: 'Bitcoin', price: 64300 },
  { code: 'ETH', name: 'Ethereum', price: 3400 },
  { code: 'MATIC', name: 'Polygon', price: 0.76 },
  { code: 'ADA', name: 'Cardano', price: 0.48 },
  { code: 'USDC', name: 'USD Coin', price: 1.0 },
];

export const Trade: React.FC = () => {
  const { t } = useTranslation();
  const [side, setSide] = useState<'buy' | 'sell'>('buy');
  const [selectedAsset, setSelectedAsset] = useState('BTC');
  const [usdAmount, setUsdAmount] = useState('2500');
  const [submitted, setSubmitted] = useState<string | null>(null);

  const assetObj = PAIRS.find((p) => p.code === selectedAsset) || PAIRS[0];
  const estimatedUnits = Number(usdAmount || 0) / assetObj.price;

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(
      `${side.toUpperCase()} ${estimatedUnits.toFixed(4)} ${selectedAsset} ($${Number(
        usdAmount || 0,
      ).toLocaleString('en-US')})`,
    );
  };

  return (
    <View isPage className="w-full space-y-6 p-6">
      <div>
        <span className="chip mb-2">Instant Execution Desk</span>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          <Text className="text-2xl font-bold">{t('trade')}</Text>
        </h1>
        <p className="text-sm text-muted-foreground">
          Zero-slippage spot swaps and limit order routing across deep liquidity pools.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Order Ticket */}
        <form onSubmit={handleOrder} className="surface space-y-5 p-6 lg:col-span-2">
          <div className="grid grid-cols-2 gap-2 rounded-xl bg-muted p-1">
            <button
              type="button"
              onClick={() => setSide('buy')}
              className={`rounded-lg py-2 text-sm font-semibold transition-colors ${
                side === 'buy'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Buy Asset
            </button>
            <button
              type="button"
              onClick={() => setSide('sell')}
              className={`rounded-lg py-2 text-sm font-semibold transition-colors ${
                side === 'sell'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Sell Asset
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">Select Market</label>
              <select
                value={selectedAsset}
                onChange={(e) => setSelectedAsset(e.target.value)}
                className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {PAIRS.map((p) => (
                  <option key={p.code} value={p.code}>
                    {p.name} ({p.code}) — ${p.price.toLocaleString('en-US')}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">Amount (USD)</label>
              <input
                type="number"
                min="10"
                step="any"
                value={usdAmount}
                onChange={(e) => setUsdAmount(e.target.value)}
                className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 font-mono text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          <div className="rounded-xl border border-border/80 bg-muted/40 p-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Estimated Receive</span>
              <span className="inline-flex items-center gap-1">
                <ArrowDownUp className="h-3.5 w-3.5" />1 {assetObj.code} = $
                {assetObj.price.toLocaleString('en-US')}
              </span>
            </div>
            <div className="mt-1.5 font-mono text-2xl font-bold text-foreground">
              {estimatedUnits.toFixed(6)} {assetObj.code}
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-border/60 pt-2 text-xs text-muted-foreground">
              <span>Network Fee (0.1%)</span>
              <span className="font-mono">${(Number(usdAmount || 0) * 0.001).toFixed(2)}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            {side === 'buy' ? `Buy ${selectedAsset} Instantly` : `Sell ${selectedAsset} Instantly`}
          </button>

          {submitted && (
            <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs font-medium text-emerald-500">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>Order routed: {submitted}</span>
            </div>
          )}
        </form>

        {/* Market Depth & Execution Features */}
        <div className="space-y-4">
          <div className="surface p-5">
            <h2 className="text-sm font-semibold text-foreground">Spot Reference</h2>
            <div className="mt-3 space-y-2.5">
              {PAIRS.map((p) => {
                // @ts-ignore
                const icon = coins?.[p.code]?.icon;
                return (
                  <button
                    key={p.code}
                    type="button"
                    onClick={() => setSelectedAsset(p.code)}
                    className={`flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left text-xs transition-colors ${
                      selectedAsset === p.code
                        ? 'border-primary/50 bg-primary/10 text-foreground'
                        : 'border-border/60 bg-background/60 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span className="flex items-center gap-2 font-medium text-foreground">
                      {icon && <img src={icon} alt={p.code} className="h-5 w-5 rounded-full" />}
                      {p.name} ({p.code})
                    </span>
                    <span className="font-mono font-semibold text-foreground">
                      ${p.price.toLocaleString('en-US')}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="surface space-y-3 p-5 text-xs text-muted-foreground">
            <div className="flex items-center gap-2 text-foreground">
              <Zap className="h-4 w-4 text-primary" />
              <span className="font-semibold">Smart Order Routing</span>
            </div>
            <p>
              Orders split across aggregated books to guarantee best bid/ask execution with zero
              front-running.
            </p>
            <div className="flex items-center gap-2 text-foreground">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span className="font-semibold">Custody Protected</span>
            </div>
          </div>
        </div>
      </div>
    </View>
  );
};

export default Trade;
