import React from 'react';
import {
    ScatterChart,
    Scatter,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';

export type ScatterChartData = {
    x: number;
    y: number;
    [key: string]: number | string;
};

interface ScatterChartComponentProps {
    data: ScatterChartData[];
    points: { key: string; color: string }[];
    grid?: boolean;
    xAxisKey: string;
    yAxisKey: string;
    sizeKey?: string;
}

const ScatterChartComponent: React.FC<ScatterChartComponentProps> = ({
    data,
    points,
    grid = true,
    xAxisKey,
    yAxisKey,
    // sizeKey,
}) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
                {points.map((point) => (
                    <Scatter
                        key={point.key}
                        data={data}
                        dataKey={point.key}
                        fill={point.color}
                        shape="circle"
                        // size={sizeKey ? (pointData) => pointData[sizeKey] : 10}
                    />
                ))}
                {grid && <CartesianGrid stroke="#ccc" />}
                <XAxis dataKey={xAxisKey} />
                <YAxis dataKey={yAxisKey} />
                <Tooltip />
                <Legend />
            </ScatterChart>
        </ResponsiveContainer>
    );
};

export default ScatterChartComponent;
