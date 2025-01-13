import ReactECharts from "echarts-for-react";

interface BarChartProps<T> {
    data: T[];
    xKey: keyof T;
    yKeys: (keyof T)[];
}

export const BarChart = <T,>({ data, xKey, yKeys }: BarChartProps<T>) => {
    const options = {
        xAxis: {
            type: "category",
            data: data.map((item) => item[xKey] as string),
        },
        yAxis: {
            type: "value",
        },
        series: yKeys.map((key) => ({
            name: key as string,
            type: "bar",
            data: data.map((item) => item[key] as number),
        })),
    };

    return <ReactECharts option={options} style={{ height: 400, width: "100%" }} />;
};
