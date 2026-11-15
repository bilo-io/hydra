import { Scatter } from 'react-chartjs-2';

interface ScatterChartProps<T> {
    data: T[];
    xAxisKey: keyof T;
    yAxisKey: keyof T;
    pointColor: string;
}

const ScatterChart = <T,>({ data, xAxisKey, yAxisKey, pointColor }: ScatterChartProps<T>) => {
    const chartData = {
        datasets: [
            {
                label: 'Scatter Dataset',
                data: data.map((d) => ({
                    x: Number(d[xAxisKey]),
                    y: Number(d[yAxisKey]),
                })),
                backgroundColor: pointColor,
            },
        ],
    };

    return <Scatter data={chartData} />;
};

export default ScatterChart;
