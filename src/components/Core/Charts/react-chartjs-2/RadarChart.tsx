import { Radar } from 'react-chartjs-2';

interface RadarChartProps<T> {
    data: T[];
    radar: { key: keyof T; color: string }[];
    angleAxisKey: keyof T;
}

const RadarChart = <T,>({ data, radar, angleAxisKey }: RadarChartProps<T>) => {
    const chartData = {
        labels: data.map((d) => String(d[angleAxisKey])),
        datasets: radar.map((radarConfig) => ({
            label: String(radarConfig.key),
            data: data.map((d) => Number(d[radarConfig.key])),
            backgroundColor: `${radarConfig.color}50`, // Adding transparency
            borderColor: radarConfig.color,
        })),
    };

    return <Radar data={chartData} />;
};

export default RadarChart;
