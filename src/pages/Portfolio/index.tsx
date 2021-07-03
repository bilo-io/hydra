import React, { useEffect, useState } from 'react'
import cryptoData from 'assets/crypto'

const adverts = [
    {
      name: 'Stats',
      text: 'Explore and compare crypto data',
      color: 'linear-gradient(to left, #09485f, #333)',
    },
    {
      name: 'Bulktrade',
      text: 'Trade multiple crypto currencies at once',
      color: 'linear-gradient(to left, #8844FF, #333)',
    },
    {
      name: 'Cryptonews',
      text: 'Hear the latest news on cryptocurrencies',
      color: 'linear-gradient(to left, #FF3388, #333)',
    },
    {
      name: 'Price Alerts (coming soon)',
      text: 'Configure price alerts for specific currencies, and get notified when the go above or below a custom threshold',
      color: 'linear-gradient(to left, #3388FF, #333)',
  },

  ]
function Portfolio() {
  const [advert, setAdvert] = useState<any>(adverts[Math.floor(Math.random() * adverts.length)])
  const [markets, setMarkets] = useState<any | any[]>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setAdvert(adverts[Math.floor(Math.random() * adverts.length)])
    }, 10_000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const userState = {
    isVerified: false,
    hasFunds: false,
    hasHoldings: false,
  }

  return (
    <div>
      <div className="advert-card" style={{ background: advert.color}}>
        <div><strong>{advert.name}</strong></div>
        <br />
        <div>{advert.text}</div>
      </div>

      <ActionSuggestions userState={userState} />
      <BulTradeUI />

    </div>
  );
}

const ActionSuggestions = ({ userState }: { userState: any }) => <div>
          {
            !userState.isVerified && (
              <div className="text-center">
                <h4>Verify Account</h4>
              </div>
            )
          }

          {
            !userState.hasFunds && (
              <div className="text-center">
                <h4>Add Funds</h4>
              </div>
            )
          }

          {
            !userState.hasHoldings && (
              <div className="text-center">
              <h4>Invest</h4>
            </div>
            )
          }
        </div>
const BulTradeUI = () => {
  // @ts-ignore
  const products = Object.keys(cryptoData).map(code => ({ code, ...cryptoData[code]}))
  return (
  <div>
    {
      products.map((product: any) => (
        <div className="product-card">
        {/* </div> style={{ background: `linear-gradient(to left, ${product?.color} 10%, #202020 100%)`}}> */}
          <div className="flex-row">
            <img src={product.icon} alt={product.code} />
            <div style={{ lineHeight: '2rem' }}>{product.name}</div>
          </div>
        </div>
      ))
      }
      </div>
  )
}

export default Portfolio;
