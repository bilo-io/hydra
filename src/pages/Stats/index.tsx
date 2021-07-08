import React, { useEffect, useState } from 'react'
import { LineChart } from 'components/Charts/LineChart'
import { fetchChartData } from 'services/coingecko'
import Async from 'components/Async'
import Accordion from 'components/Accordion'
import coins, { keys } from 'assets/crypto'
import { colors } from 'components/Charts/utils/colors'

function Stats () {
    // #region STATE
    const [series, setSeries] = useState<any>({
        prices: {},
        totalVolume: {},
        marketCap: {}
    })
    const [activeKeys, setActiveKeys] = useState<string[]>([])

    const [state, setState] = useState<any>({
        currency: 'usd',
        viewType: 'tile',
        isLoading: {
            ipAddress: true,
            countryForIP: true,
            cryptoInfo: true,
            cryptoIndex: true,
            chartData: true,
            coins: true
        },
        data: {},
        charts: {},
        period: {
            days: 7,
            label: 'W'
        }
    })
    // #endregion

    // #region FUNCTIONS
    const addCoinToChart = (key: string) => {
        // @ts-ignore
        const currentCoin = coins[key]
        fetchChartData({ id: currentCoin?.id, currency: state?.currency, days: state?.period?.days })
            .then((response) => {
                const apiData = response.data

                setState((prevState: any) => ({
                    ...prevState,
                    charts: {
                        ...prevState.charts,
                        [key]: apiData
                    }
                }))
            })
            .catch(error => {
                console.log(error)
            })
    }

    const removeCoinFromChart = (key: string) => {
        setActiveKeys(activeKeys.filter(current => current !== key))
        const charts = state?.charts
        delete charts[key]
        setState((prevState: any) => ({
            ...prevState,
            charts
        }))
    }

    const toggleKey = (key: string) => {
        if (!activeKeys.includes(key)) {
            // add
            setActiveKeys([...activeKeys, key])
            addCoinToChart(key)
        } else {
            // remove
            removeCoinFromChart(key)
        }
    }

    const fetchChartDataRoutine = (currency = 'usd', period = { label: 'W', days: 7 }) => {
        const { charts } = state
        setState((prevState: any) => ({
            ...prevState,
            period
        }))

        Object.keys(charts).forEach(coin => {
            fetchChartData({ id: coin, currency: 'usd', days: period.days })
                .then(response => {
                    setState({
                        charts: {
                            ...state.charts,
                            [coin]: response
                        }
                    })
                })
                .finally(() => {
                    setState({
                        isLoading: {
                            ...state.isLoading,
                            chartData: false
                        }
                    })
                })
        })
    }

    const generateSeries = (data: any, key: string, i: number) => ({
        data,
        name: key,
        type: 'area',
        fillColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [
                // @ts-ignore
                [0, colors[i]],
                [1, 'rgba(0,0,0,0)']
            ]
        }
    })
    // #endregion

    // #region LIFECYCLE
    useEffect(() => {
        console.log(state)
    }, [state])

    useEffect(() => {
        const prices = activeKeys?.map((key, i) => generateSeries(state?.charts[key]?.prices, key, i))
        const marketCap = activeKeys?.map((key, i) => generateSeries(state?.charts[key]?.market_caps, key, i))
        const totalVolume = activeKeys?.map((key, i) => generateSeries(state?.charts[key]?.total_volumes, key, i))

        const newSeries = {
            prices,
            marketCap,
            totalVolume
        }

        setSeries(newSeries)
    }, [state?.charts, activeKeys])
    // #endregion

    return (
        <div>
            <div className="bg-blurr floating-top padded card">
                <div style={{ marginBottom: '1rem', marginTop: '0.5rem' }}>Select coins</div>
                <div className="flex-row auto-scroll-x no-scrollbar">
                    {
                        keys.map((key) => (
                            <div key={key} style={{ marginRight: '1rem' }}>
                                <div style={{ opacity: activeKeys.includes(key) ? 1 : 0.5, cursor: 'pointer' }} onClick={() => toggleKey(key)}>
                                    {/* @ts-ignore */}
                                    <img src={coins[key].icon} alt={key} />
                                    <div style={{ fontSize: '0.5rem', textAlign: 'center' }}>{key}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div style={{ marginTop: '8rem' }}/>

            <Accordion title={'Chart: Price'} isOpenDefault>
                <Async loading={true}>
                    <LineChart
                        isLoading={false}
                        data={[]}
                        series={ series?.prices }
                        title={`Prices: ${activeKeys.toString()}`}
                        period={state?.period}
                        onChangeRange={ (period: any) =>
                            fetchChartDataRoutine(state?.currency, state?.period)
                        }
                    />
                </Async>
            </Accordion>
            <Accordion title={'Chart: Total Volume'} isOpenDefault>
                <Async loading={true}>
                    <LineChart
                        isLoading={false}
                        data={[]}
                        series={ series?.totalVolume }
                        title={`Total Volume: ${activeKeys.toString()}`}
                        period={state?.period}
                        onChangeRange={ (period: any) =>
                            fetchChartDataRoutine(state?.currency, state?.period)
                        }
                    />
                </Async>
            </Accordion>
            <Accordion title={'Chart: Market Cap'} isOpenDefault>
                <Async loading={true}>
                    <LineChart
                        isLoading={false}
                        data={[]}
                        series={ series?.marketCap }
                        title={`Market Cap: ${activeKeys.toString()}`}
                        period={state?.period}
                        onChangeRange={ (period: any) =>
                            fetchChartDataRoutine(state?.currency, state?.period)
                        }
                    />
                </Async>
            </Accordion>
        </div>
    )
}

export default Stats
