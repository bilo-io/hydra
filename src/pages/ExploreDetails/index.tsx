import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Star } from 'lucide-react';
import { LineChart } from 'components/Charts/LineChart';
import { fetchCoins, fetchChartData } from 'services/coingecko';
import { currency, language } from 'utils/locale';
import Async from 'components/Async';
import Accordion from 'components/Accordion';
import HTML from 'components/HTML';
import cryptoAssets from 'assets/crypto';

function ExploreDetails({ storybook }: { storybook?: any }) {
  const navigate = useNavigate();
  const id: string = useParams().id || storybook?.id || 'bitcoin';

  const [loading, setLoading] = useState<boolean>(false);
  const [coinData, setCoinData] = useState<any>({
    id,
    name: id.charAt(0).toUpperCase() + id.slice(1),
    image: { thumb: cryptoAssets.BTC?.icon },
    market_data: { current_price: { usd: 64300, zar: 1185000, eur: 59400 } },
    description: {
      en: 'Decentralized digital asset tracked by Hydra spot and analytics feeds.',
    },
    developer_data: { stars: 74200 },
  });
  const [state, setState] = useState<any>({
    currency: 'usd',
    period: {
      days: 7,
      label: 'W',
    },
    chart: [
      [Date.now() - 6 * 86400000, 61200],
      [Date.now() - 5 * 86400000, 62100],
      [Date.now() - 4 * 86400000, 61800],
      [Date.now() - 3 * 86400000, 63100],
      [Date.now() - 2 * 86400000, 63900],
      [Date.now() - 1 * 86400000, 63500],
      [Date.now(), 64300],
    ],
  });

  const fetchChart = (period: any) => {
    setState((prevState: any) => ({
      ...prevState,
      period,
    }));

    fetchChartData({ id, currency: state?.currency, days: period?.days })
      .then((response) => {
        if (response?.data?.prices) {
          setState((prevState: any) => ({
            ...prevState,
            chart: response.data.prices,
          }));
        }
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchChart(state?.period);
    fetchCoins(id)
      .then((response) => {
        if (response?.data) setCoinData(response.data);
      })
      .catch(() => {});
  }, [id]);

  return (
    <div className="space-y-6 p-6">
      <div className="surface flex flex-wrap items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate('/explore')}
            className="rounded-lg border border-border p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          {coinData?.image?.thumb && (
            <img src={coinData.image.thumb} alt={id} className="h-8 w-8 rounded-full" />
          )}
          <h1 className="text-xl font-bold text-foreground">{coinData?.name}</h1>
        </div>
        <div className="font-mono text-xl font-bold text-primary">
          {currency?.symbol || '$'}
          {(
            coinData?.market_data?.current_price?.[currency?.code?.toLowerCase()] ??
            coinData?.market_data?.current_price?.usd ??
            64300
          ).toLocaleString('en-US')}
        </div>
      </div>

      <div className="space-y-4">
        <Accordion title="Price Chart" isOpenDefault>
          <Async isLoading={loading}>
            <LineChart
              title=""
              data={state?.chart}
              series={[{ data: state?.chart || [], name: coinData?.name }]}
              period={state?.period}
              onChangeRange={(period: any) =>
                fetchChart({ id, currency: state?.currency, days: period?.days })
              }
            />
          </Async>
        </Accordion>

        <Accordion title="Info" isOpenDefault>
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <HTML content={coinData?.description?.[language?.code] || coinData?.description?.en || ''} />
          </div>
        </Accordion>

        <Accordion title="Developer" isOpenDefault>
          <div className="flex items-center gap-2 text-sm text-foreground">
            <Star className="h-4 w-4 text-amber-500" />
            <span className="font-mono font-semibold">{coinData?.developer_data?.stars ?? 0}</span>
            <span className="text-muted-foreground">GitHub Stars</span>
          </div>
        </Accordion>
      </div>
    </div>
  );
}

export default ExploreDetails;
