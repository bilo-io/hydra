import ReactECharts from "echarts-for-react";

interface PieChartProps<T> {
    data: T[];
    nameKey: string;
    valueKey: string;
}

export const PieChart = <T,>({ data, nameKey, valueKey }: PieChartProps<T>) => {
    const options = {
        series: [
            {
                type: "pie",
                data: data.map((item) => ({
                    name: item[nameKey as keyof T],
                    value: item[valueKey as keyof T],
                })),
            },
        ],
    };

    return <ReactECharts option={options} style={{ height: 400, width: "100%" }} />;
};
