// #region Modules
import React, {
  useState,
  useEffect
} from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import theme from './utils/theme'
import { periods, getTickInterval } from './utils/misc'
// #endregion

// @ts-ignore
Highcharts.theme = theme
// @ts-ignore
Highcharts.setOptions(Highcharts.theme)

const staticOptions = {
  title: {
    text: 'LineChart'
  },
  chart: {
    renderTo: 'container',
    type: 'spline',
    backgroundColor: 'transparent'
    // backgroundColor : {
    //     linearGradient : [0, 0, 0, 400],
    //     stops : [
    //         [0, 'rgb(96, 96, 96)'],
    //         [1, 'rgb(16, 16, 16)']
    //     ]
    // }
  },
  // 1 year
  tickInterval: 1000 * 60 * 60 * getTickInterval(1),
  series: [{
    type: 'area',
    fillColor: {
      linearGradient: [0, 0, 0, 300],
      stops: [
        // @ts-ignore
        [0, Highcharts.getOptions().colors[0]],
        [1, 'rgba(0,0,0,0)']
      ]
    }
  }],
  xAxis: [{
    type: 'datetime',
    crosshair: true,
    tickInterval: 1000 * 60 * 60 * getTickInterval(1)
  }]
}

interface LineChartProps {
    data: any[],
    series: any[],
    title: any,
    period: any,
    isLoading?: boolean,
    onChangeRange?: Function,
    showRangePicker?: boolean,
}

export const LineChart = ({
  data,
  series,
  title,
  period,
  isLoading,
  onChangeRange,
  showRangePicker
} : LineChartProps) => {
  const [options, setOptions] = useState({
    ...staticOptions
  })

  // const series = [{
  //     type: 'line',
  //     data
  // }]

  useEffect(() => {
    setOptions({
      ...staticOptions,
      // @ts-ignore
      series,
      // series: [{
      //     ...staticOptions.series,
      //     ...series,
      // }],
      title: {
        text: title
      }
    })
  }, [data, series])

  const loadTimeRange = (period: any) => {
    onChangeRange?.(period)
    setOptions({
      ...options,
      xAxis: [{
        type: 'datetime',
        crosshair: true,
        tickInterval: 1000 * 60 * 60 * getTickInterval(period.days)
      }]
    })
  }

  return (
    <div className='card' style={{
      width: 'calc(100% - 2rem)',
      margin: '1rem',
      borderRadius: '8px'
    }}>
      <div className='flex-row'>
        { showRangePicker &&
                    (periods || []).map((item, i) => (
                      <button key={i}
                        className={`hollow ${period.label === item.label ? 'primary' : ''}`}
                        onClick={() => loadTimeRange(item)}
                        style={{ width: '5rem', borderRadius: '1rem' }}>
                        { item?.label || 'X'}
                      </button>
                    ))
        }
      </div>
      {/* <Async isLoading={ isLoading }> */}
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        // constructorType='stockChart'
      />
      {/* </Async> */}
    </div>
  )
}

export default LineChart
