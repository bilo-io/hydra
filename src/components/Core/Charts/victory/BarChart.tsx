import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';

interface BarChartProps<T> {
    data: T[];
    bars: { key: keyof T; color: string }[];
    xAxisKey: keyof T;
}

const BarChart = <T,>({ data, bars, xAxisKey }: BarChartProps<T>) => (
    <VictoryChart theme={VictoryTheme.material}>
        <VictoryAxis />
        <VictoryAxis dependentAxis />
        {bars.map((bar) => (
            <VictoryBar
                key={String(bar.key)}
                data={data}
                x={xAxisKey as string}
                y={bar.key as string}
                style={{ data: { fill: bar.color } }}
            />
        ))}
    </VictoryChart>
);

export default BarChart;
