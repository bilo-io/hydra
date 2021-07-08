import React, { useEffect, useState } from 'react'
import cryptoData from 'assets/crypto'
import { currency } from 'utils/locale'
import { withCommas } from 'utils/format-number'
import PieChart from 'components/Charts/PieChart'
import Advert from 'components/Cards/Advert'
import ActionSuggestions from 'components/Cards/ActionSuggestions'

const adverts = [
    {
        name: 'Stats',
        text: 'Explore and compare crypto data',
        color: 'linear-gradient(to left, #09485f, #333)'
    },
    {
        name: 'BulkTrade',
        text: 'Trade multiple crypto currencies at once',
        color: 'linear-gradient(to left, #8844FF, #333)'
    },
    {
        name: 'Crypto news',
        text: 'Hear the latest news on cryptocurrencies',
        color: 'linear-gradient(to left, #FF3388, #333)'
    },
    {
        name: 'Price Alerts (coming soon)',
        text: 'Configure price alerts for specific currencies, and get notified when the go above or below a custom threshold',
        color: 'linear-gradient(to left, #3388FF, #333)'
    }
]

const BulkTradeUI = () => {
    // @ts-ignore
    const products = Object.keys(cryptoData).map(code => ({ code, ...cryptoData[code] }))
    return (
        <div>
            {
                products.map((product: any, i: number) => (
                    <div key={i} className="product-card">
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

function Portfolio () {
    const [advert, setAdvert] = useState<any>(adverts[Math.floor(Math.random() * adverts.length)])

    useEffect(() => {
        const interval = setInterval(() => {
            setAdvert(adverts[Math.floor(Math.random() * adverts.length)])
        }, 10_000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    const userState = {
        isVerified: true,
        hasFunds: true,
        hasHoldings: true
    }

    const portfolio = {
        totalAmount: 1_148_867.59,
        fiatAmount: 148_867.59,
        breakdown: [
            {
                code: 'BTC',
                name: 'Bitcoin',
                units: '1.5',
                amount: 750_000
            },
            {
                code: 'ETH',
                name: 'Ethereum',
                units: '7.91',
                amount: 250_000
            },
            {
                code: 'ZAR',
                name: 'Rand',
                units: '148_867.59',
                amount: 148_867.59
            }
        ]
    }

    const PortfolioSummary = ({ data }: { data: any }) => (
        <div className="portfolio-holdings">
            <div className="text-center"
                style={{
                    fontSize: '1.5rem',
                    marginTop: '1rem'
                }}>
                {currency?.symbol}{withCommas(data?.totalAmount)}
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', width: '100%', margin: 'auto', marginTop: '-6rem' }}>
                <PieChart selector={'amount'} data={portfolio.breakdown} isLoading={false} title=""/>
            </div>
        </div>
    )
    return (
        <div>

            {userState.hasHoldings && <PortfolioSummary data={portfolio} />}

            {
                userState.hasHoldings
                    ? (
                        <div style={{ paddingTop: '14rem' }} />
                    )
                    : (
                        <Advert item={advert} />
                    )
            }

            <ActionSuggestions userState={userState} />

            <BulkTradeUI />
        </div>
    )
}

export default Portfolio
