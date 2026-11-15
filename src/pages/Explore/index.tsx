import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Search } from 'lucide-react';
import Async from 'components/Async';
import { fetchCoins } from 'services/coingecko';
import { CoinCard } from 'components/Cards/CoinCard';
import { currency } from 'utils/locale';
import cryptoAssets from 'assets/crypto';

const FALLBACK_COINS = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: { large: cryptoAssets.BTC?.icon },
    market_data: { current_price: { usd: 64300, zar: 1185000, eur: 59400 }, price_change_percentage_24h: 3.42 },
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
    image: { large: cryptoAssets.ETH?.icon },
    market_data: { current_price: { usd: 3400, zar: 62600, eur: 3140 }, price_change_percentage_24h: 2.18 },
  },
  {
    id: 'binancecoin',
    symbol: 'bnb',
    name: 'Binance Coin',
    image: { large: cryptoAssets.BNB?.icon },
    market_data: { current_price: { usd: 588, zar: 10840, eur: 542 }, price_change_percentage_24h: 1.54 },
  },
  {
    id: 'cardano',
    symbol: 'ada',
    name: 'Cardano',
    image: { large: cryptoAssets.ADA?.icon },
    market_data: { current_price: { usd: 0.48, zar: 8.85, eur: 0.44 }, price_change_percentage_24h: 4.12 },
  },
  {
    id: 'matic-network',
    symbol: 'matic',
    name: 'Polygon',
    image: { large: cryptoAssets.MATIC?.icon },
    market_data: { current_price: { usd: 0.76, zar: 14.02, eur: 0.7 }, price_change_percentage_24h: -1.14 },
  },
  {
    id: 'ripple',
    symbol: 'xrp',
    name: 'XRP',
    image: { large: cryptoAssets.XRP?.icon },
    market_data: { current_price: { usd: 0.62, zar: 11.4, eur: 0.57 }, price_change_percentage_24h: -0.85 },
  },
  {
    id: 'dogecoin',
    symbol: 'doge',
    name: 'Dogecoin',
    image: { large: cryptoAssets.DOGE?.icon },
    market_data: { current_price: { usd: 0.16, zar: 2.95, eur: 0.15 }, price_change_percentage_24h: 5.64 },
  },
  {
    id: 'usd-coin',
    symbol: 'usdc',
    name: 'USD Coin',
    image: { large: cryptoAssets.USDC?.icon },
    market_data: { current_price: { usd: 1.0, zar: 18.42, eur: 0.92 }, price_change_percentage_24h: 0.01 },
  },
];

function Explore() {
  const navigate = useNavigate();
  const [coins, setCoins] = useState<any[]>(FALLBACK_COINS);
  const [loading, setLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('');
  const [filteredCoins, setFilteredCoins] = useState<any[]>(FALLBACK_COINS);

  const filterCoins = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilter(value);
    setFilteredCoins(
      value.length === 0
        ? coins
        : coins.filter(
            (coin) =>
              coin.name.toLowerCase().includes(value.toLowerCase()) ||
              coin.id.toLowerCase().includes(value.toLowerCase()),
          ),
    );
  };

  useEffect(() => {
    let mounted = true;
    fetchCoins()
      .then((response: any) => {
        if (mounted && Array.isArray(response?.data) && response.data.length > 0) {
          setCoins(response.data);
          setFilteredCoins(response.data);
        }
      })
      .catch(() => {
        // Fallback coins remain displayed
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="chip mb-2">Asset Directory</span>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Explore</h1>
          <p className="text-sm text-muted-foreground">
            Search and inspect spot valuations, 24h momentum, and on-chain fundamentals.
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={filter}
            onChange={filterCoins}
            placeholder="Filter assets by name or symbol..."
            className="w-full rounded-xl border border-input bg-card py-2 pl-9 pr-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <Async isLoading={loading}>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {filteredCoins.map((coin) => (
            <CoinCard
              key={coin.id}
              item={coin}
              currency={currency}
              onClick={(c: any) => navigate(`/explore/${c?.id}`)}
            />
          ))}
        </div>
      </Async>
    </div>
  );
}

export default Explore;
