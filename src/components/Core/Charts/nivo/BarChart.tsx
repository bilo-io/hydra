import { ResponsiveBar } from "@nivo/bar";

interface BarChartProps<T> {
    data: T[];
    keys: string[];
    indexBy: string;
}

export const BarChart = <T,>({ data, keys, indexBy }: BarChartProps<T>) => {
    return (
        <div style={{ height: 400 }}>
            <ResponsiveBar
                data={data}
                keys={keys}
                indexBy={indexBy}
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                colors={{ scheme: "category10" }}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: indexBy,
                    legendPosition: "middle",
                    legendOffset: 32,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "value",
                    legendPosition: "middle",
                    legendOffset: -40,
                }}
                borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            />
        </div>
    );
};
