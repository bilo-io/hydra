/* eslint-disable camelcase */
/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react'
import { LineChart } from 'components/Charts/LineChart'
import { fetchChartData, fetchCoins } from 'services/coingecko'
import Async from 'components/Async'
import Accordion from 'components/Accordion'
import Table from 'components/Table'
import coins, { keys } from 'assets/crypto'
import { colors } from 'components/Charts/utils/colors'
import Header from 'components/Table/Header'
import PriceChange from 'components/PriceChange'

function Stats () {
    // #region STATE
    const [activeKeys, setActiveKeys] = useState<string[]>([])

    const [series, setSeries] = useState<any>({
        prices: {},
        totalVolume: {},
        marketCap: {}
    })
    const [searchState] = useState<any>({
        orderType: 'all',
        order: 'desc',
        orderyColumn: 'coin'
    })
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
        info: {},
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

        fetchCoins(currentCoin.id)
            .then(response => {
                setState((prevState: any) => ({
                    ...prevState,
                    info: {
                        ...prevState.info,
                        [currentCoin.id]: response.data
                    }
                }))
            })
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
            fetchCoins(coin)
                .then(response => {
                    setState((prevState: any) => ({
                        ...prevState,
                        info: {
                            ...prevState.info,
                            [coin]: response
                        }
                    }))
                })
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

    // #region TABLES
    const rows = Object.keys(state?.info).map((key) => ({
        ...state?.info?.[key]
    }))
    const columns = React.useMemo(
        () => [
            // {
            //     accessor: 'id',
            //     Header: () => (
            //         <Header
            //             value={'COIN'}
            //             label={'Coin'}
            //             order={searchState.order}
            //             orderByColumn={searchState.orderByColumn}
            //             onToggle={() => { }}
            //         />
            //     ),
            //     Cell: ({ value, row }: { value: any; row: any }) => (
            //         <div>{value}</div>
            //     )
            // },
            {
                accessor: 'name',
                Header: () => (
                    <Header
                        value={'name'}
                        label={'Name'}
                        order={searchState.order}
                        orderByColumn={searchState.orderByColumn}
                        onToggle={() => { }}
                    />
                ),
                Cell: ({ value, row }: { value: any; row: any }) => (
                    <div>{value}</div>
                )
            },
            {
                accessor: 'market_data.current_price.usd',
                Header: () => (
                    <Header
                        value={'currentPrice'}
                        label={'Price'}
                        order={searchState.order}
                        orderByColumn={searchState.orderByColumn}
                        onToggle={() => { }}
                    />
                ),
                Cell: ({ value, row }: { value: any; row: any }) => (
                    <div>${value}</div>
                )
            },
            {
                accessor: 'market_data.price_change_24h_in_currency.usd',
                Header: () => (
                    <Header
                        value={'currentPrice'}
                        label={'24H'}
                        order={searchState.order}
                        orderByColumn={searchState.orderByColumn}
                        onToggle={() => { }}
                    />
                ),
                Cell: ({ value, row }: { value: any; row: any }) => {
                    const { price_change_24h } = row?.original?.market_data

                    return (
                        <PriceChange
                            isStacked
                            percentage={price_change_24h}
                            value={value}
                        />
                    )
                }
            },
            {
                accessor: 'market_data.price_change_percentage_7d_in_currency.usd',
                Header: () => (
                    <Header
                        value={'currentPrice'}
                        label={'1W'}
                        order={searchState.order}
                        orderByColumn={searchState.orderByColumn}
                        onToggle={() => {}}
                    />
                ),
                Cell: ({ value, row }: { value: any; row: any }) => {
                    const { price_change_percentage_7d } = row?.original?.market_data

                    return (
                        <PriceChange
                            isStacked
                            percentage={price_change_percentage_7d}
                            value={value}
                        />
                    )
                }
            },
            {
                accessor: 'market_data.price_change_percentage_14d_in_currency.usd',
                Header: () => (
                    <Header
                        value={'currentPrice'}
                        label={'2W'}
                        order={searchState.order}
                        orderByColumn={searchState.orderByColumn}
                        onToggle={() => {}}
                    />
                ),
                Cell: ({ value, row }: { value: any; row: any }) => {
                    const { price_change_percentage_14d } = row?.original?.market_data

                    return (
                        <PriceChange
                            isStacked
                            percentage={price_change_percentage_14d}
                            value={value}
                        />
                    )
                }
            },
            {
                accessor: 'market_data.price_change_percentage_30d_in_currency.usd',
                Header: () => (
                    <Header
                        value={'currentPrice'}
                        label={'1M'}
                        order={searchState.order}
                        orderByColumn={searchState.orderByColumn}
                        onToggle={() => {}}
                    />
                ),
                Cell: ({ value, row }: { value: any; row: any }) => {
                    const { price_change_percentage_30d } = row?.original?.market_data

                    return (
                        <PriceChange
                            isStacked
                            percentage={price_change_percentage_30d}
                            value={value}
                        />
                    )
                }

            },
            {
                accessor: 'market_data.price_change_percentage_60d_in_currency.usd',
                Header: () => (
                    <Header
                        value={'currentPrice'}
                        label={'2M'}
                        order={searchState.order}
                        orderByColumn={searchState.orderByColumn}
                        onToggle={() => {}}
                    />
                ),
                Cell: ({ value, row }: { value: any; row: any }) => {
                    const { price_change_24h_in_currency } = row?.original

                    return (
                        <PriceChange
                            isStacked
                            percentage={price_change_24h_in_currency}
                            value={value}
                        />
                    )
                }
            },
            {
                accessor: 'market_data.price_change_percentage_200d_in_currency.usd',
                Header: () => (
                    <Header
                        value={'currentPrice'}
                        label={'6M'}
                        order={searchState.order}
                        orderByColumn={searchState.orderByColumn}
                        onToggle={() => {}}
                    />
                ),
                Cell: ({ value, row }: { value: any; row: any }) => {
                    const { price_change_percentage_200d } = row?.original?.market_data

                    return (
                        <PriceChange
                            isStacked
                            percentage={price_change_percentage_200d}
                            value={value}
                        />
                    )
                }
            },
            {
                accessor: 'market_data.price_change_percentage_1y_in_currency.usd',
                Header: () => (
                    <Header
                        value={'currentPrice'}
                        label={'1Y'}
                        order={searchState.order}
                        orderByColumn={searchState.orderByColumn}
                        onToggle={() => {}}
                    />
                ),
                Cell: ({ value, row }: { value: any; row: any }) => {
                    const { price_change_percentage_1y } = row?.original

                    return (
                        <PriceChange
                            isStacked
                            percentage={price_change_percentage_1y}
                            value={value}
                        />
                    )
                }
            }

        ], [])
    // #endregion

    return (
        <div>
            <div className="bg-blur floating-top padded card">
                <div style={{ marginBottom: '1rem', marginTop: '0.5rem' }}>Select coins</div>
                <div className="flex-row auto-scroll-x no-scrollbar">
                    {
                        keys.map((key) => (
                            <div key={key} style={{ marginRight: '1rem' }}>
                                <div style={{ opacity: activeKeys.includes(key) ? 1 : 0.5, cursor: 'pointer' }} onClick={() => toggleKey(key)}>
                                    {/* @ts-ignore */}
                                    <img src={coins[key].icon} alt={key} style={{ width: '2rem', height: '1uto' }}/>
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
            <Accordion title={'Chart: Total Volume'} isOpenDefault={false}>
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
            <Accordion title={'Chart: Market Cap'} isOpenDefault={false}>
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
            <Accordion title='Data Table' isOpenDefault>
                <Table
                    columns={columns}
                    data={rows}
                />
            </Accordion>

            <div>
                {
                    // activeKeys.map((key) => (
                    //     <pre key={key}>
                    //         {JSON.stringify(state?.info, undefined, 4)}
                    //     </pre>
                    // ))
                }
            </div>
        </div>
    )
}

export default Stats
