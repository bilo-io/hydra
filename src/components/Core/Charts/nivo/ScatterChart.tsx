import { ResponsiveScatterPlot } from "@nivo/scatterplot";

interface ScatterChartProps<T> {
    data: T[];
    xKey: string;
    yKey: string;
}

export const ScatterChart = <T,>({ data }: ScatterChartProps<T>) => {
    return (
        <div style={{ height: 400 }}>
            <ResponsiveScatterPlot
                data={data}
                margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
                xScale={{ type: "linear" }}
                yScale={{ type: "linear" }}
                blendMode="multiply"
                axisBottom={{
                    legend: "X-axis",
                    legendPosition: "middle",
                    legendOffset: 46,
                }}
                axisLeft={{
                    legend: "Y-axis",
                    legendPosition: "middle",
                    legendOffset: -60,
                }}
                colors={{ scheme: "set1" }}
            />
        </div>
    );
};
