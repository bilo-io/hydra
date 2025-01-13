import { VictoryArea, VictoryChart, VictoryPolarAxis, VictoryTheme } from 'victory';

interface RadarChartProps<T> {
    data: T[];
    radar: { key: keyof T; color: string }[];
    angleAxisKey: keyof T;
    radiusAxisKey: keyof T;
}

const RadarChart = <T,>({
    data,
    radar,
    angleAxisKey,
    radiusAxisKey,
}: RadarChartProps<T>) => (
    <VictoryChart polar theme={VictoryTheme.material}>
        <VictoryPolarAxis />
        <VictoryPolarAxis
            dependentAxis
            // label={radiusAxisKey}
            style={{ axisLabel: { fontSize: 10, padding: 10 } }}
        />
        <VictoryPolarAxis
            // label={angleAxisKey}
            style={{ axisLabel: { fontSize: 10, padding: 10 } }}
        />
        {radar.map((radarConfig) => (
            <VictoryArea
                key={String(radarConfig.key)}
                data={data}
                x={angleAxisKey as string}
                y={radiusAxisKey as string}
                style={{ data: { fill: radarConfig.color, fillOpacity: 0.5 } }}
            />
        ))}
    </VictoryChart>
);




export default RadarChart;
