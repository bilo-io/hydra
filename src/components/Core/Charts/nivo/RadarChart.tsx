import { ResponsiveRadar } from "@nivo/radar";

interface RadarChartProps<T> {
    data: T[];
    keys: string[];
    indexBy: string;
}

export const RadarChart = <T,>({ data, keys, indexBy }: RadarChartProps<T>) => {
    return (
        <div style={{ height: 400 }}>
            <ResponsiveRadar
                data={data}
                keys={keys}
                indexBy={indexBy}
                maxValue="auto"
                margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                curve="linearClosed"
                borderWidth={2}
                borderColor={{ from: "color" }}
                gridLevels={5}
                gridShape="circular"
                gridLabelOffset={36}
                enableDots={true}
                dotSize={10}
                dotColor={{ theme: "background" }}
                dotBorderWidth={2}
                colors={{ scheme: "nivo" }}
                fillOpacity={0.25}
                blendMode="multiply"
                legends={[
                    {
                        anchor: "top-left",
                        direction: "column",
                        translateX: -50,
                        translateY: -40,
                        itemWidth: 80,
                        itemHeight: 20,
                        itemTextColor: "#999",
                        symbolSize: 12,
                        symbolShape: "circle",
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemTextColor: "#000",
                                },
                            },
                        ],
                    },
                ]}
            />
        </div>
    );
};
