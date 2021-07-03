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
Highcharts.theme = theme;
// @ts-ignore
Highcharts.setOptions(Highcharts.theme)

const staticOptions = {
    title: {
        text: 'LineChart'
    },
    // chart: {
    //     type: 'spline'
    // },
    // 1 year
    tickInterval: 1000 * 60 * 60 * getTickInterval(1),
    series: ['1', '2', '3'],
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
    isLoading: boolean,
    onChangeRange?: Function,
}

export const LineChart = ({
        data,
        series,
        title,
        period,
        isLoading,
        onChangeRange
} : LineChartProps) => {

    const [options, setOptions] = useState({
        ...staticOptions
    })

    useEffect(() => {
        setOptions({
            ...staticOptions,
            series,
            title: {
                text: title
            }
        })
    }, [data, series])


    const loadTimerange = (period: any) => {
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
                {
                    (periods || []).map((item, i) => (
                        <button key={i}
                            className={`hollow ${period.label === item.label ? 'primary' : ''}`}
                            onClick={ () => loadTimerange(item)}>
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

export default LineChart;
