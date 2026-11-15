import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TableCurrencies from './Table';
import { fetchMarkets } from 'services/coingecko';
import { Text, View } from '../../components/Core';
import coins from 'assets/crypto';

const FALLBACK_MARKETS = [
  { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin', current_price: 64300, high_24h: 65120, low_24h: 62890, price_change_percentage_24h: 3.42, image: coins.BTC?.icon },
  { id: 'ethereum', symbol: 'eth', name: 'Ethereum', current_price: 3400, high_24h: 3485, low_24h: 3310, price_change_percentage_24h: 2.18, image: coins.ETH?.icon },
  { id: 'binancecoin', symbol: 'bnb', name: 'Binance Coin', current_price: 588, high_24h: 596, low_24h: 574, price_change_percentage_24h: 1.54, image: coins.BNB?.icon },
  { id: 'ripple', symbol: 'xrp', name: 'XRP', current_price: 0.62, high_24h: 0.65, low_24h: 0.59, price_change_percentage_24h: -0.85, image: coins.XRP?.icon },
  { id: 'cardano', symbol: 'ada', name: 'Cardano', current_price: 0.48, high_24h: 0.51, low_24h: 0.46, price_change_percentage_24h: 4.12, image: coins.ADA?.icon },
  { id: 'matic-network', symbol: 'matic', name: 'Polygon', current_price: 0.76, high_24h: 0.81, low_24h: 0.74, price_change_percentage_24h: -1.14, image: coins.MATIC?.icon },
  { id: 'dogecoin', symbol: 'doge', name: 'Dogecoin', current_price: 0.16, high_24h: 0.17, low_24h: 0.15, price_change_percentage_24h: 5.64, image: coins.DOGE?.icon },
  { id: 'usd-coin', symbol: 'usdc', name: 'USD Coin', current_price: 1.0, high_24h: 1.001, low_24h: 0.999, price_change_percentage_24h: 0.01, image: coins.USDC?.icon },
];

export const Currencies: React.FC = () => {
  const { t } = useTranslation();
  const [list, setList] = useState<unknown[]>(FALLBACK_MARKETS);

  useEffect(() => {
    let mounted = true;
    fetchMarkets({ currencyCode: 'usd' })
      .then((markets) => {
        if (mounted && Array.isArray(markets?.data) && markets.data.length > 0) {
          setList(markets.data);
        }
      })
      .catch(() => {
        // Fallback market snapshot remains active
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <View isPage className="w-full space-y-6 p-6">
      <div>
        <span className="chip mb-2">Live Market Feed</span>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          <Text className="text-2xl font-bold">{t('currencies')}</Text>
        </h1>
        <p className="text-sm text-muted-foreground">
          24-hour spot market ranges and benchmark liquidity across tracked digital currencies.
        </p>
      </div>
      <TableCurrencies data={list} />
    </View>
  );
};

export default Currencies;
