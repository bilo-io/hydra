import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { getCoins } from 'services/coingecko';
import { language } from 'utils/locale';

function ExploreDetails() {
  const history = useHistory();
  //@ts-ignore
  const { id } = useParams();
  const [coinData, setCoinData] = useState<any>(null)
  const [chartData, setChartData] = useState<any[]>([])

  useEffect(() => {
    getCoins(id).then((response:any) => {
      console.log(`CoinData ${id}`, response?.data)
      setCoinData(response?.data)
    })
  }, [])

  return (
    <div>
      <div>{coinData?.name}</div>
      <img src={coinData?.image?.thumb} />
      <div>{coinData?.genesisDate}</div>
      {/* <div dangerouslySetInnerHTML={{ __html: coinData?.description[language?.code] }} /> */}
      <div>{coinData?.hashAlgorithm}</div>
      {/* <div>{coinData?.}</div> */}
    </div>
  );
}

export default ExploreDetails;
