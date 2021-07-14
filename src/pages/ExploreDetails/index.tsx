import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { LineChart } from 'components/Charts/LineChart'
import { fetchCoins, fetchChartData } from 'services/coingecko'
import { currency, language } from 'utils/locale'
import FAIcon from 'react-fontawesome'
import Async from 'components/Async'
import Accordion from 'components/Accordion'
import HTML from 'components/HTML'

function ExploreDetails ({ storybook }: { storybook: any }) {
  // const history = useHistory();
  // @ts-ignore
  let { id } = useParams?.()
  if (!id) { id = storybook.id }

  const [loading, setLoading] = useState<boolean>(true)
  const [, setError] = useState<any>()
  const [coinData, setCoinData] = useState<any>(null)
  const [state, setState] = useState<any>({
    currency: 'usd',
    period: {
      days: 7,
      label: 'W'
    },
    chart: []
  })

  // #region FUNCTIONS
  const fetchChart = (period: any) => {
    // setLoading(true);
    setState((prevState: any) => ({
      ...prevState,
      period
    }))

    fetchChartData({ id, currency: state?.currency, days: period?.days })
      .then((response) => {
        setState((prevState: any) => ({
          ...prevState,
          chart: response.data?.prices
        }))
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    fetchChart(state?.period)
    fetchCoins(id)
      .then(response => {
        setCoinData(response.data)
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => {

      })
  }, [])

  useEffect(() => {
    fetchChart(state?.period)
  }, [state?.period])
  // #endregion LIFECYCLE

  return (
    <div>
      <div
        className="full-width flex-row space-between"
        style={{
          position: 'absolute',
          backdropFilter: 'blur(5px)',
          backgroundColor: '#33333333',
          zIndex: 10
        }}>
        <div className="flex-row">
          <img src={coinData?.image?.thumb} alt={id} style={{ width: '2rem', margin: '0.5rem' }} />
          <div style={{ lineHeight: '3rem' }}>{coinData?.name}</div>
        </div>
        <div style={{ lineHeight: '3rem', marginRight: '1rem' }}>{ currency?.symbol}{coinData?.market_data?.current_price[currency?.code]}</div>
      </div>

      <div style={{ paddingTop: '3rem' }} />

      <Accordion title={'Price Chart'} isOpenDefault>
        <Async isLoading={loading}>
          <LineChart
            title=""
            data={state?.chart}
            series={[{ data: state?.chart || [] }]}
            period={state?.period}
            onChangeRange={ (period: any) =>
              fetchChart({ id, currency: state?.currency, days: period?.days })
            }
          />
        </Async>
      </Accordion>

      <Accordion title={'Market data'} />

      <Accordion title={'Info'}>
        <HTML content={coinData?.description[language?.code]} />
      </Accordion>

      <Accordion title={'Rating'}>
        <div className="flex-row" />
      </Accordion>

      <Accordion title={'Developer'} isOpenDefault>
        <div className="padded">
          <div className="flex-row">
            <FAIcon name='star' />
            <div>{coinData?.developer_data?.stars}</div>
          </div>
        </div>
      </Accordion>
    </div>
  )
}

export default ExploreDetails
