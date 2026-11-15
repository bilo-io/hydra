import { Bar } from 'react-chartjs-2';

interface BarChartProps<T> {
    data: T[];
    bars: { key: keyof T; color: string }[];
    xAxisKey: keyof T;
}

const BarChart = <T,>({ data, bars, xAxisKey }: BarChartProps<T>) => {
    const chartData = {
        labels: data.map((d) => String(d[xAxisKey])),
        datasets: bars.map((bar) => ({
            label: String(bar.key),
            data: data.map((d) => Number(d[bar.key])),
            backgroundColor: bar.color,
        })),
    };

    return <Bar data={chartData} />;
};

export default BarChart;
