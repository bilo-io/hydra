import Async from 'components/Async'
import React, { useState, useEffect } from 'react'

import { useHistory } from 'react-router'
import { fetchCoins } from 'services/coingecko'
import { currency } from 'utils/locale'

function Explore () {
    const history = useHistory()
    const [coins, setCoins] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [, setError] = useState<any>(null)
    const [filter, setFilter] = useState<string>('')
    const [filteredCoins, setFilteredCoins] = useState<any[]>([])

    // #region FUNCTIONS
    const filterCoins = (event: any) => {
        const { value } = event.target
        console.log(value)
        setFilter(value)
        setFilteredCoins(value.length === 0 ? coins : coins.filter((coin) => coin.name.toLowerCase().includes(value.toLowerCase()) || coin.id.includes(value.toLowerCase())))
    }
    // #endregion

    // #region LIFECYCLE
    useEffect(() => {
        setLoading(true)
        fetchCoins().then((response:any) => {
            setCoins(response?.data)
            setFilteredCoins(response?.data)
            console.log(response)
        })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    // #endregion

    return (
        <div>
            <Async isLoading={loading}>
                <div className="bg-blurr floating-top padded card">
                    <input
                        type={'text'}
                        value={filter}
                        onChange={filterCoins}
                        style={{
                            width: 'calc(100% - 2rem)',
                            margin: '0.5rem',
                            padding: '0.5rem',
                            borderRadius: '1rem',
                            backgroundColor: '#FFFFFF33!important'
                        }}
                    />
                </div>

                <div style={{ marginTop: '6rem' }} />
                {
                    filteredCoins.map((coin) => (
                        <div key={coin?.id} className="coin-card" onClick={() => history.push(`/explore/${coin?.id}`)}>
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
            </Async>
        </div>
    )
}

export default Explore
