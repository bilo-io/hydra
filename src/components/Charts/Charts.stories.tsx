import React, { useEffect, useState } from 'react'
import LineChart from './LineChart'
import PieChart from './PieChart'
import CandleStickChart from './CandleStickChart'
import axios from 'axios'

export default {
  title: 'Core/Charts',
  component: LineChart,
  subComponents: [
    LineChart,
    PieChart,
    CandleStickChart
  ]
}

export function Line () {
  const lineData = [15, 21, 33, 25, 12, 43, 56, 58, 64, 45, 34, 22, 43, 28, 21, 11, 23]
  return (
    <>
      <div>
        {/* @ts-ignore */}
        <LineChart data={lineData} title="LineChart Story" isLoading={false} series={{ name: 'Sample', data: lineData }} period={{ label: 'W', days: 7 }}/>
      </div>
    </>
  )
}

export function Pie () {
  const [pieData, setData] = useState<any[]>(
    [
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
  )
  useEffect(() => {
    axios.get('https://demo-live-data.highcharts.com/aapl-ohlc.json')
      .then(response => {
        setData(response.data)
      })
  }, [])
  return (
    <>
      <div>
        <PieChart data={pieData} title="PieChart Story" isLoading={ false } selector="value"/>
      </div>
    </>
  )
}

export function CandleStick () {
  const [ohlcData, setData] = useState<any[]>([])
  useEffect(() => {
    axios.get('https://demo-live-data.highcharts.com/aapl-ohlc.json')
      .then(response => {
        setData(response.data)
      })
  }, [])
  return (
    <>
      <div>
        <CandleStickChart data={ohlcData} title="PieChart Story" />
      </div>
    </>
  )
}
