import { AxiosError, AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { getCoins, getChart } from 'services/coingecko'

function Explore() {
  const [coins, setCoins] = useState<any[]>([])
  useEffect(() => {
    getCoins().then((response:any) => {
      setCoins(response?.data)
      console.log(response)
    })
  }, [])

  return (
    <div>
      {
        coins.map((coin) => (
          <div>
            {coin.id}
          </div>
        ))
      }
    </div>
  );
}

export default Explore;
