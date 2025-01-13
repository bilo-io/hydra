import ReactECharts from "echarts-for-react";

interface RadarChartProps<T> {
    data: T[];
    indicator: { name: string; max: number }[];
}

export const RadarChart = <T,>({ data, indicator }: RadarChartProps<T>) => {
    const options = {
        radar: {
            indicator,
        },
        series: [
            {
                type: "radar",
                data: [
                    {
                        value: data.map((item) => item as number),
                        name: "Sample Data",
                    },
                ],
            },
        ],
    };

    return <ReactECharts option={options} style={{ height: 400, width: "100%" }} />;
};
