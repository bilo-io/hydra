import { ResponsiveAreaBump } from "@nivo/bump";

interface AreaChartProps<T> {
    data: T[];
    colors?: string[];
}

export const AreaChart = <T,>({ data, colors = ["#4caf50", "#2196f3", "#ff9800"] }: AreaChartProps<T>) => {
    return (
        <div style={{ height: 400 }}>
            <ResponsiveAreaBump
                data={data}
                colors={{ scheme: "nivo" }}
                blendMode="multiply"
                borderColor={{ from: "color", modifiers: [["darker", 0.8]] }}
            />
        </div>
    );
};
