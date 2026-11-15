import { Line } from 'react-chartjs-2';

interface LineChartProps<T> {
    data: T[];
    lines: { key: keyof T; color: string }[];
    xAxisKey: keyof T;
}

const LineChart = <T,>({ data, lines, xAxisKey }: LineChartProps<T>) => {
    const chartData = {
        labels: data.map((d) => String(d[xAxisKey])),
        datasets: lines.map((line) => ({
            label: String(line.key),
            data: data.map((d) => Number(d[line.key])),
            borderColor: line.color,
            backgroundColor: `${line.color}50`, // Adding transparency
            fill: false,
        })),
    };

    return <Line data={chartData} />;
};

export default LineChart;
