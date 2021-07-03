import React, { useEffect, useState } from 'react';
import { LineChart } from 'components/Charts/LineChart'
import { fetchChartData } from 'services/coingecko'
import Async from 'components/Async';
import Accordion from 'components/Accordion';

function Stats() {
  // #region STATE
  const [charts, setCharts] = useState<any>({})
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

  const chartKeys = ['bitcoin']
  //#endregion

  //#region FUNCTIONS
  const fetchChartDataRoutine = (currency = 'usd', period = { label: 'W', days: 7 }) => {
        console.log('fetching chart data')
        const { charts } = state
        setState({
            period
        })

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
  const addCoinToChart = (coin: any) => {
        setState({
            isLoading: {
                ...state.isLoading,
                chartData: true
            }
        })
        console.log('fetching coin data: ', coin.id)
        fetchChartData({ id: coin.id, currency: 'usd', days: 7 })
            .then(response => {
                setState({
                    charts: {
                        ...state.charts,
                        [coin.id]: response
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
    }

    const removeCoinFromChart = (coin: any) => {
        const id = coin.id
        const newCharts = state.charts
        delete newCharts[id]
        setState({
            charts: newCharts
        })
    }
  //#endregion

  // #region LIFECYCLE
  useEffect(() => {
    console.log(state)
  }, [state])
  // #endregion
  const series = chartKeys?.map((key) => ({
            data: charts[key]?.prices,
            name: key
        }))

    console.log({ series })
  return (
      <div>
          <Accordion title="Selection">

          </Accordion>
        <Accordion title={'Chart'} isOpenDefault>
            <Async loading={true}>
                <LineChart
                    isLoading={false}
                    data={[]}
                    series={ [{ data: state?.chart?.prices }] }
                    title={`Coins: ${chartKeys.toString()}`}
                    period={state?.period}
                    onChangeRange={ (period: any) =>
                        fetchChartDataRoutine(state?.currency, state?.period)
                    }
                />
            </Async>
        </Accordion>
    </div>
  );
}

export default Stats;
