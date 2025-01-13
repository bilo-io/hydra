import { VictoryLine, VictoryChart, VictoryLegend, VictoryTheme, VictoryAxis } from 'victory';

interface LineChartProps<T> {
    data: T[];
    lines: { key: keyof T; color: string }[];
    xAxisKey: keyof T;
}

const LineChart = <T,>({ data, lines, xAxisKey }: LineChartProps<T>) => (
    <VictoryChart theme={VictoryTheme.material}>
        <VictoryAxis />
        <VictoryAxis dependentAxis />
        {lines.map((line) => (
            <VictoryLine
                key={String(line.key)}
                data={data}
                x={xAxisKey as string}
                y={line.key as string}
                style={{ data: { stroke: line.color } }}
            />
        ))}
        <VictoryLegend
            x={125}
            y={50}
            title="Legend"
            centerTitle
            orientation="horizontal"
            gutter={20}
            style={{ title: { fontSize: 10 } }}
            data={lines.map((line) => ({
                name: line.key,
                symbol: { fill: line.color },
            }))}
        />
    </VictoryChart>
);

export default LineChart;