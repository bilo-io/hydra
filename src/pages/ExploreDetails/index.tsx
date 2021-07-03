import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { LineChart } from 'components/Charts/LineChart'
import { fetchCoins, fetchChartData } from 'services/coingecko';
import { language } from 'utils/locale';

function ExploreDetails() {
  const history = useHistory();
  //@ts-ignore
  const { id } = useParams();
  const [coinData, setCoinData] = useState<any>(null)
  const [state, setState] = useState<any>({
    currency: 'usd',
    period: {
        days: 7,
        label: 'W'
    },
    chart: []
  })

  useEffect(() => {
    fetchChartData({ id, currency: state?.currency, days: state?.period?.days })
      .then((response) => {
        setState((prevState: any) => ({
          ...prevState,
          chart: response.data?.prices
        }))
      })
  }, [])

  const series: any[] = [] // state?.chart

  return (
    <div>
      <div>{coinData?.name}</div>
      <img src={coinData?.image?.thumb} />
      <div>{coinData?.genesisDate}</div>
      {/* <div dangerouslySetInnerHTML={{ __html: coinData?.description[language?.code] }} /> */}
      <div>{coinData?.hashAlgorithm}</div>
      <LineChart
        isLoading={false}
        title=""
            data={state?.chart}
            series={series }
            period={state?.period}
            onChangeRange={ (period: any) =>
              fetchChartData({ id, currency: state?.currency, days: state?.period?.days })
            }
      />
    </div>
  );
}

export default ExploreDetails;
