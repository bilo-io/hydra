import ReactECharts from "echarts-for-react";

interface AreaChartProps<T> {
    data: T[];
    xKey: string;
    yKey: string;
}

export const AreaChart = <T,>({ data, xKey, yKey }: AreaChartProps<T>) => {
    const options = {
        xAxis: {
            type: "category",
            data: data.map((item) => item[xKey as keyof T]),
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                data: data.map((item) => item[yKey as keyof T]),
                type: "line",
                areaStyle: {},
                smooth: true,
            },
        ],
    };

    return <ReactECharts option={options} style={{ height: 400, width: "100%" }} />;
};
