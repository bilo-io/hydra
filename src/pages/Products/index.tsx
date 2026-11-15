import React from 'react';
import { useNavigate } from 'react-router';
import { Layers, Sparkles, ArrowRight, BellRing, Newspaper } from 'lucide-react';
import cryptoData from 'assets/crypto';

const FEATURE_CARDS = [
  {
    name: 'BulkTrade',
    text: 'Rebalance and execute multi-asset crypto baskets in a single atomic transaction.',
    badge: 'Pro Desk',
    path: '/trade',
    Icon: Layers,
  },
  {
    name: 'Quant Stats',
    text: 'Compare normalized price, volume, and market-cap curves across 25+ tokens.',
    badge: 'Analytics',
    path: '/stats',
    Icon: Sparkles,
  },
  {
    name: 'Crypto News',
    text: 'Curated macro, DeFi, and institutional regulation headlines in real time.',
    badge: 'Live Feed',
    path: '/news',
    Icon: Newspaper,
  },
  {
    name: 'Price Alerts',
    text: 'Configure custom volatility thresholds and instant webhook notifications.',
    badge: 'Automation',
    path: '/settings',
    Icon: BellRing,
  },
];

const Products = () => {
  const navigate = useNavigate();
  // @ts-ignore
  const products = Object.keys(cryptoData).map((code) => ({ code, ...cryptoData[code] }));

  return (
    <div className="space-y-6 p-6">
      <div>
        <span className="chip mb-2">Ecosystem & Baskets</span>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Products</h1>
        <p className="text-sm text-muted-foreground">
          Institutional crypto products, thematic bundles, and supported settlement assets.
        </p>
      </div>

      {/* Featured Capabilities */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURE_CARDS.map((card) => {
          const Icon = card.Icon;
          return (
            <div
              key={card.name}
              onClick={() => navigate(card.path)}
              className="surface flex cursor-pointer flex-col justify-between p-5 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="chip">{card.badge}</span>
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <h2 className="text-base font-semibold text-foreground">{card.name}</h2>
                <p className="text-xs leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary">
                <span>Open module</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Supported Crypto Assets Grid */}
      <div className="surface p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-foreground">Supported Vault Assets</h2>
            <p className="text-xs text-muted-foreground">
              Available for spot trading, portfolio bundling, and custody settlement
            </p>
          </div>
          <span className="chip">{products.length} Assets</span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {products.map((product: any, i: number) => (
            <div
              key={product.code || i}
              onClick={() => navigate(`/explore/${product.id || product.code?.toLowerCase()}`)}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-border/70 bg-background/60 p-3 transition-colors hover:border-primary/40 hover:bg-accent/50"
            >
              {product.icon && (
                <img
                  src={product.icon}
                  alt={product.code}
                  className="h-8 w-8 shrink-0 rounded-full object-contain"
                />
              )}
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-foreground">{product.name}</div>
                <div className="font-mono text-xs text-muted-foreground">{product.code}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
