/* eslint-disable import/no-anonymous-default-export */
// 20201028233936
// https://raw.githubusercontent.com/jbkunst/highcharts-themes-collection/gh-pages/themes/alone.js
export default {
    colors: [
        '#00adee',
        '#2980b9',
        '#2ecc71',
        '#3499ad',
        '#2c3e50',
        '#03aedd'
    ],
    chart: {
        backgroundColor: '#1D1D1D',
        style: {
            fontFamily: 'Roboto',
            color: '#666666'
        }
    },
    title: {
        align: 'left',
        style: {
            fontFamily: 'Roboto Condensed',
            fontWeight: 'bold'
        }
    },
    subtitle: {
        align: 'left',
        style: {
            fontFamily: 'Roboto Condensed'
        }
    },
    legend: {
        align: 'right',
        verticalAlign: 'bottom',
        itemStyle: {
            color: '#424242'
        }
    },
    xAxis: {
        gridLineColor: '#424242',
        gridLineWidth: 1,
        minorGridLineColor: '#424242',
        minoGridLineWidth: 0.5,
        tickColor: '#424242',
        minorTickColor: '#424242',
        lineColor: '#424242'
    },
    yAxis: {
        gridLineColor: '#424242',
        ridLineWidth: 1,
        minorGridLineColor: '#424242',
        inoGridLineWidth: 0.5,
        tickColor: '#424242',
        minorTickColor: '#424242',
        lineColor: '#424242'
    },
    plotOptions: {
        line: {
            marker: {
                enabled: false
            }
        },
        spline: {
            marker: {
                enabled: false
            }
        },
        area: {
            marker: {
                enabled: false
            }
        },
        areaspline: {
            marker: {
                enabled: false
            }
        },
        arearange: {
            marker: {
                enabled: false
            }
        },
        bubble: {
            maxSize: '10%'
        }
    }
}
