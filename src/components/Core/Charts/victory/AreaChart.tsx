import { VictoryArea, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';

// Define the generic type for the data
interface AreaChartProps<T> {
    data: T[];
    areas: { key: keyof T; color: string }[];
    xAxisKey: keyof T;
}

const AreaChart = <T,>({ data, areas, xAxisKey }: AreaChartProps<T>) => {
    return (
        <VictoryChart theme={VictoryTheme.material}>
            <VictoryAxis />
            <VictoryAxis dependentAxis />
            {areas.map((area) => (
                <VictoryArea
                    key={String(area.key)}
                    data={data}
                    x={xAxisKey as string}
                    y={area.key as string}
                    style={{ data: { fill: area.color, opacity: 0.6 } }}
                />
            ))}
        </VictoryChart>
    );
};

export default AreaChart;
