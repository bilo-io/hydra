import ReactECharts from "echarts-for-react";

interface ScatterChartProps<T> {
    data: T[];
    xKey: string;
    yKey: string;
}

export const ScatterChart = <T,>({ data, xKey, yKey }: ScatterChartProps<T>) => {
    const options = {
        xAxis: {
            type: "value",
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                type: "scatter",
                data: data.map((item) => [item[xKey as keyof T], item[yKey as keyof T]]),
            },
        ],
    };

    return <ReactECharts option={options} style={{ height: 400, width: "100%" }} />;
};
