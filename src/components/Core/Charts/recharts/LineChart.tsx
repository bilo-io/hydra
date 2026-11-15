import React from 'react';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
    Legend,
} from 'recharts';

export type ChartData = {
    name: string;
    [key: string]: string | number;
};

interface LineChartComponentProps {
    data: ChartData[];
    lines: { key: string; color: string }[];
    grid?: boolean;
    xAxisKey: string;
    yAxisLabel?: string;
    type?: 'line' | 'area';
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({
    data,
    lines,
    grid = true,
    xAxisKey,
    yAxisLabel,
    type = 'line',
}) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            {type === 'line' ? (
                <LineChart data={data}>
                    {lines.map((line) => (
                        <Line
                            key={line.key}
                            type="monotone"
                            dataKey={line.key}
                            stroke={line.color}
                            strokeWidth={2}
                        />
                    ))}
                    {grid && <CartesianGrid stroke="#ccc" />}
                    <XAxis dataKey={xAxisKey} />
                    <YAxis label={yAxisLabel ? { value: yAxisLabel, angle: -90, position: 'insideLeft' } : undefined} />
                    <Tooltip />
                    <Legend />
                </LineChart>
            ) : (
                <AreaChart data={data}>
                    {lines.map((line) => (
                        <Area
                            key={line.key}
                            type="monotone"
                            dataKey={line.key}
                            stroke={line.color}
                            fill={line.color}
                        />
                    ))}
                    {grid && <CartesianGrid stroke="#ccc" />}
                    <XAxis dataKey={xAxisKey} />
                    <YAxis label={yAxisLabel ? { value: yAxisLabel, angle: -90, position: 'insideLeft' } : undefined} />
                    <Tooltip />
                    <Legend />
                </AreaChart>
            )}
        </ResponsiveContainer>
    );
};

export default LineChartComponent;
