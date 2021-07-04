import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useEffect, useState } from 'react';

const staticOptions = {
    title: {
        text: 'PieChart'
    },
    chart: {
        plotBackgroundColor: 'transparent',
        // plotShadow: false,
        type: 'pie',
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: 'transparent',
        borderWidth: 12,
        top: -100,
        // innerHeight: 20,
        // maxHeight: 100,
        margin: [0, 0, 0, 0],
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0
    },
    plotOptions: {
        pie: {
            size:'30%',
            innerSize: '90%',
            borderColor: 'transparent'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.amount:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    // plotOptions: {
    //     pie: {
    //         allowPointSelect: true,
    //         cursor: 'pointer',
    //         dataLabels: {
    //             enabled: true,
    //             format: '<b>{point.name}</b>: {point.percentage:.1f} %'
    //         }
    //     }
    // },
}

interface PieChartProps {
    data: any[],
    // series: any[],
    title: any,
    selector: string,
    // period: any,
    isLoading: boolean,
    onChangeRange?: Function,
}

function PieChart({
    data,
    // series,
    title,
    selector,
    // period,
    // isLoading,
    // onChangeRange
}: PieChartProps) {
    const [options, setOptions] = useState({
        ...staticOptions
    })

    const series = [{
        name: 'Breakdown',
        colorByPoint: true,
        data: data.map((item) => ({ ...item, y: item[selector]}))
    }]

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])
  return (
    <div>
      <HighchartsReact
            highcharts={Highcharts}
            options={options}
            // constructorType='stockChart'
        />
    </div>
  );
}

export default PieChart;
