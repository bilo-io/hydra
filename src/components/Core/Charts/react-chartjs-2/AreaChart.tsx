import { Line } from 'react-chartjs-2';

interface AreaChartProps<T> {
    data: T[];
    areas: { key: keyof T; color: string }[];
    xAxisKey: keyof T;
}

const AreaChart = <T,>({ data, areas, xAxisKey }: AreaChartProps<T>) => {
    const chartData = {
        labels: data.map((d) => String(d[xAxisKey])),
        datasets: areas.map((area) => ({
            label: String(area.key),
            data: data.map((d) => Number(d[area.key])),
            backgroundColor: `${area.color}50`, // Adding transparency
            borderColor: area.color,
            fill: true,
        })),
    };

    return <Line data={chartData} />;
};

export default AreaChart;
