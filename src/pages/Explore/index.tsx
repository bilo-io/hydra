import { AxiosError, AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { fetchCoins } from 'services/coingecko'
import { currency } from 'utils/locale'

function Explore() {
  const history = useHistory();
  const [coins, setCoins] = useState<any[]>([])
  useEffect(() => {
    fetchCoins().then((response:any) => {
      setCoins(response?.data)
      console.log(response)
    })
  }, [])

  return (
    <div>
      {
        coins.map((coin) => (
          <div className="coin-card" onClick={() => history.push(`/explore/${coin?.id}`)}>
            <div className="flex-row space-between">
              <div className="flex-row">
                <img src={coin?.image?.large} alt={`${coin?.id}`} style={{ height: '2rem', padding: '0.5rem' }}/>
                <div className="name">{coin.name}</div>
              </div>
              <div className="price">
                { currency?.symbol}{coin?.market_data?.current_price[currency.code.toLowerCase()]}
              </div>
            </div>
            </div>
        ))
      }
    </div>
  )
}

export default Explore;
