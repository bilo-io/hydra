/* eslint-disable camelcase */
/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';
import { LineChart } from 'components/Charts/LineChart';
import { fetchChartData, fetchCoins } from 'services/coingecko';
import Async from 'components/Async';
import Accordion from 'components/Accordion';
import Table from 'components/Table';
import coins, { keys } from 'assets/crypto';
import Header from 'components/Table/Header';
import PriceChange from 'components/PriceChange';

const now = Date.now();
const dayMs = 86_400_000;
const makePoints = (base: number, drift: number) =>
  Array.from({ length: 8 }, (_, i) => [
    now - (7 - i) * dayMs,
    Math.round((base + Math.sin(i * 0.9) * drift + i * (drift * 0.35)) * 100) / 100,
  ]);

const FALLBACK_CHARTS: Record<string, any> = {
  USDC: {
    prices: makePoints(1.0, 0.002),
    market_caps: makePoints(34_000_000_000, 250_000_000),
    total_volumes: makePoints(5_200_000_000, 400_000_000),
  },
  DOGE: {
    prices: makePoints(0.15, 0.015),
    market_caps: makePoints(22_000_000_000, 900_000_000),
    total_volumes: makePoints(1_800_000_000, 220_000_000),
  },
  BTC: {
    prices: makePoints(62500, 1400),
    market_caps: makePoints(1_240_000_000_000, 18_000_000_000),
    total_volumes: makePoints(32_000_000_000, 3_500_000_000),
  },
  ETH: {
    prices: makePoints(3280, 95),
    market_caps: makePoints(395_000_000_000, 8_000_000_000),
    total_volumes: makePoints(16_500_000_000, 1_900_000_000),
  },
};

const FALLBACK_INFO: Record<string, any> = {
  USDC: {
    id: 'usd-coin',
    symbol: 'usdc',
    name: 'USD Coin',
    market_data: {
      current_price: { usd: 1.0 },
      price_change_24h: 0.01,
      price_change_24h_in_currency: { usd: 0.0001 },
      price_change_percentage_7d: 0.02,
      price_change_percentage_7d_in_currency: { usd: 0.0002 },
      price_change_percentage_14d: 0.01,
      price_change_percentage_14d_in_currency: { usd: 0.0001 },
      price_change_percentage_30d: 0.03,
      price_change_percentage_30d_in_currency: { usd: 0.0003 },
    },
  },
  DOGE: {
    id: 'dogecoin',
    symbol: 'doge',
    name: 'Dogecoin',
    market_data: {
      current_price: { usd: 0.164 },
      price_change_24h: 5.64,
      price_change_24h_in_currency: { usd: 0.009 },
      price_change_percentage_7d: 11.2,
      price_change_percentage_7d_in_currency: { usd: 0.016 },
      price_change_percentage_14d: 14.8,
      price_change_percentage_14d_in_currency: { usd: 0.021 },
      price_change_percentage_30d: 24.5,
      price_change_percentage_30d_in_currency: { usd: 0.032 },
    },
  },
};

function Stats() {
  const [error, setError] = useState<any>(null);
  const [activeKeys, setActiveKeys] = useState<string[]>(['USDC', 'DOGE']);

  const [series, setSeries] = useState<any>({
    prices: [],
    totalVolume: [],
    marketCap: [],
  });

  const [searchState] = useState<any>({
    orderType: 'all',
    order: 'desc',
    orderByColumn: 'coin',
  });

  const [state, setState] = useState<any>({
    currency: 'usd',
    viewType: 'tile',
    isLoading: {
      chartData: false,
      coins: false,
    },
    data: {},
    charts: FALLBACK_CHARTS,
    info: FALLBACK_INFO,
    period: {
      days: 7,
      label: 'W',
    },
  });

  const handleError = (err: any) => setError(err);

  const addCoinToChart = (key: string) => {
    // @ts-ignore
    const currentCoin = coins[key];
    if (!currentCoin) return;

    fetchCoins(currentCoin.id)
      .then((response) => {
        if (response?.data) {
          setState((prevState: any) => ({
            ...prevState,
            info: {
              ...prevState.info,
              [key]: response.data,
            },
          }));
        }
      })
      .catch(() => {});

    fetchChartData({ id: currentCoin?.id, currency: state?.currency, days: state?.period?.days })
      .then((response) => {
        if (response?.data) {
          setState((prevState: any) => ({
            ...prevState,
            charts: {
              ...prevState.charts,
              [key]: response.data,
            },
          }));
        }
      })
      .catch(handleError);
  };

  const removeCoinFromChart = (key: string) => {
    setActiveKeys(activeKeys.filter((current) => current !== key));
  };

  const toggleKey = (key: string) => {
    if (!activeKeys.includes(key)) {
      setActiveKeys([...activeKeys, key]);
      addCoinToChart(key);
    } else {
      removeCoinFromChart(key);
    }
  };

  const generateSeries = (data: any, key: string) => ({
    data: data || makePoints(100, 12),
    name: key,
    type: 'area',
    // @ts-ignore
    color: coins?.[key]?.color || '#6366f1',
    fillColor: {
      linearGradient: [0, 0, 0, 300],
      stops: [
        // @ts-ignore
        [0, coins?.[key]?.color || '#6366f1'],
        [1, 'rgba(0,0,0,0)'],
      ],
    },
  });

  const toggleCoin = (key: string) => () => toggleKey(key);

  useEffect(() => {
    activeKeys.forEach((key) => addCoinToChart(key));
  }, []);

  useEffect(() => {
    const prices = activeKeys.map((key) => generateSeries(state?.charts?.[key]?.prices, key));
    const marketCap = activeKeys.map((key) =>
      generateSeries(state?.charts?.[key]?.market_caps, key),
    );
    const totalVolume = activeKeys.map((key) =>
      generateSeries(state?.charts?.[key]?.total_volumes, key),
    );

    setSeries({
      prices,
      marketCap,
      totalVolume,
    });
  }, [state?.charts, activeKeys]);

  const rows = Object.keys(state?.info || {}).map((key) => ({
    ...state?.info?.[key],
  }));

  const columns = React.useMemo(
    () => [
      {
        accessor: 'icon',
        Header: () => <div className="w-6" />,
        Cell: ({ row }: { row: any }) => {
          const key = row?.original?.symbol?.toUpperCase();
          // @ts-ignore
          const icon = coins?.[key]?.icon;
          return icon ? <img src={icon} alt={key} className="h-7 w-7 rounded-full" /> : null;
        },
      },
      {
        accessor: 'name',
        Header: () => <span>Name</span>,
        Cell: ({ value }: { value: any }) => <span className="font-semibold">{value}</span>,
      },
      {
        accessor: 'market_data.current_price.usd',
        Header: () => (
          <Header
            value="currentPrice"
            label="Price"
            order={searchState.order}
            orderByColumn={searchState.orderByColumn}
          />
        ),
        Cell: ({ value }: { value: any }) => (
          <span className="font-mono font-medium">${value ?? '—'}</span>
        ),
      },
      {
        accessor: 'market_data.price_change_24h_in_currency.usd',
        Header: () => (
          <Header
            value="currentPrice"
            label="24H"
            order={searchState.order}
            orderByColumn={searchState.orderByColumn}
          />
        ),
        Cell: ({ value, row }: { value: any; row: any }) => {
          const price_change_24h = row?.original?.market_data?.price_change_24h ?? 0;
          return <PriceChange isStacked percentage={price_change_24h} value={value} />;
        },
      },
      {
        accessor: 'market_data.price_change_percentage_7d_in_currency.usd',
        Header: () => (
          <Header
            value="currentPrice"
            label="1W"
            order={searchState.order}
            orderByColumn={searchState.orderByColumn}
          />
        ),
        Cell: ({ value, row }: { value: any; row: any }) => {
          const pct = row?.original?.market_data?.price_change_percentage_7d ?? 0;
          return <PriceChange isStacked percentage={pct} value={value} />;
        },
      },
      {
        accessor: 'market_data.price_change_percentage_30d_in_currency.usd',
        Header: () => (
          <Header
            value="currentPrice"
            label="1M"
            order={searchState.order}
            orderByColumn={searchState.orderByColumn}
          />
        ),
        Cell: ({ value, row }: { value: any; row: any }) => {
          const pct = row?.original?.market_data?.price_change_percentage_30d ?? 0;
          return <PriceChange isStacked percentage={pct} value={value} />;
        },
      },
    ],
    [state?.info],
  );

  return (
    <div className="space-y-6 p-6">
      <div>
        <span className="chip mb-2">Comparative Telemetry</span>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Stats</h1>
        <p className="text-sm text-muted-foreground">
          Toggle multi-coin overlays to compare historical price trajectories, volume, and market
          capitalization.
        </p>
      </div>

      <div className="surface p-5">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Select coins to compare
        </div>
        <div className="flex flex-wrap gap-2.5">
          {keys.map((key) => {
            const active = activeKeys.includes(key);
            // @ts-ignore
            const icon = coins[key]?.icon;
            return (
              <button
                key={key}
                type="button"
                onClick={toggleCoin(key)}
                className={`flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all ${
                  active
                    ? 'border-primary bg-primary/15 text-foreground shadow-sm'
                    : 'border-border/70 bg-background/60 text-muted-foreground opacity-65 hover:opacity-100'
                }`}
              >
                {icon && <img src={icon} alt={key} className="h-5 w-5 rounded-full" />}
                <span>{key}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-4">
        <Accordion title="Chart: Price" isOpenDefault>
          <Async isLoading={false}>
            <LineChart
              data={[]}
              period={state?.period}
              series={series?.prices}
              title={`Prices: ${activeKeys.join(', ')}`}
            />
          </Async>
        </Accordion>

        <Accordion title="Chart: Total Volume" isOpenDefault={false}>
          <Async isLoading={false}>
            <LineChart
              data={[]}
              period={state?.period}
              series={series?.totalVolume}
              title={`Total Volume: ${activeKeys.join(', ')}`}
            />
          </Async>
        </Accordion>

        <Accordion title="Chart: Market Cap" isOpenDefault={false}>
          <Async isLoading={false}>
            <LineChart
              data={[]}
              period={state?.period}
              series={series?.marketCap}
              title={`Market Cap: ${activeKeys.join(', ')}`}
            />
          </Async>
        </Accordion>

        <Accordion title="Data Table" isOpenDefault>
          <Table columns={columns} data={rows} />
        </Accordion>
      </div>

      {error ? <div className="hidden">{JSON.stringify(error)}</div> : null}
    </div>
  );
}

export default Stats;
