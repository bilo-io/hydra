import React from 'react';
import {
    AreaChart,
    Area,
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

interface AreaChartComponentProps {
    data: ChartData[];
    areas: { key: string; color: string }[];
    grid?: boolean;
    xAxisKey: string;
    yAxisLabel?: string;
    stackOffset?: 'expand' | 'none' | 'silhouette' | 'wiggle' | 'stream';
}

const AreaChartComponent: React.FC<AreaChartComponentProps> = ({
    data,
    areas,
    grid = true,
    xAxisKey,
    yAxisLabel,
    stackOffset = 'none',
}) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
                {areas.map((area) => (
                    <Area
                        key={area.key}
                        type="monotone"
                        dataKey={area.key}
                        stroke={area.color}
                        fill={area.color}
                        stackId={stackOffset === 'none' ? undefined : 'a'}
                    />
                ))}
                {grid && <CartesianGrid stroke="#ccc" />}
                <XAxis dataKey={xAxisKey} />
                <YAxis label={yAxisLabel ? { value: yAxisLabel, angle: -90, position: 'insideLeft' } : undefined} />
                <Tooltip />
                <Legend />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default AreaChartComponent;
