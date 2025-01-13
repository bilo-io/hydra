import { VictoryScatter, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';

interface ScatterChartProps<T> {
    data: T[];
    points: { key: keyof T; color: string }[];
    xAxisKey: keyof T;
    yAxisKey: keyof T;
}

const ScatterChart = <T,>({ data, points, xAxisKey, yAxisKey }: ScatterChartProps<T>) => (
    <VictoryChart theme={VictoryTheme.material}>
        <VictoryAxis />
        <VictoryAxis dependentAxis />
        {points.map((point) => (
            <VictoryScatter
                key={String(point.key)}
                data={data}
                x={xAxisKey as string}
                y={yAxisKey as string}
                style={{ data: { fill: point.color } }}
            />
        ))}
    </VictoryChart>
);

export default ScatterChart;

