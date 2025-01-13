import React from 'react';
import {
    RadarChart,
    Radar,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';

export type RadarChartData = {
    subject: string;
    [key: string]: string | number;
};

interface RadarChartComponentProps {
    data: RadarChartData[];
    radar: { key: string; color: string }[];
    angleAxisKey: string;
    radiusAxisKey: string;
    grid?: boolean;
}

const RadarChartComponent: React.FC<RadarChartComponentProps> = ({
    data,
    radar,
    angleAxisKey,
    radiusAxisKey,
    grid = true,
}) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={data}>
                {radar.map((item) => (
                    <Radar
                        key={item.key}
                        name={item.key}
                        dataKey={item.key}
                        stroke={item.color}
                        fill={item.color}
                        fillOpacity={0.6}
                    />
                ))}
                {grid && <PolarGrid />}
                <PolarAngleAxis dataKey={angleAxisKey} />
                <PolarRadiusAxis dataKey={radiusAxisKey} />
                <Tooltip />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default RadarChartComponent;
