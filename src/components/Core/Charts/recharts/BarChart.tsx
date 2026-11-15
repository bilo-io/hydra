import React from 'react';
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';

export type ChartData = {
    name: string;
    [key: string]: string | number;
};

interface BarChartComponentProps {
    data: ChartData[];
    bars: { key: string; color: string }[];
    grid?: boolean;
    xAxisKey: string;
    yAxisLabel?: string;
    barSize?: number;
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({
    data,
    bars,
    grid = true,
    xAxisKey,
    yAxisLabel,
    barSize = 20,
}) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                {bars.map((bar) => (
                    <Bar
                        key={bar.key}
                        dataKey={bar.key}
                        fill={bar.color}
                        barSize={barSize}
                    />
                ))}
                {grid && <CartesianGrid stroke="#ccc" />}
                <XAxis dataKey={xAxisKey} />
                <YAxis label={yAxisLabel ? { value: yAxisLabel, angle: -90, position: 'insideLeft' } : undefined} />
                <Tooltip />
                <Legend />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;
