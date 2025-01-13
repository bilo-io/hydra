import { MayHaveLabel, ResponsivePie } from "@nivo/pie";

interface PieChartProps<T> {
    data: T[];
    valueKey: string;
    idKey: string;
}

export const PieChart = <T,>({ data }: PieChartProps<T>) => {
    return (
        <div style={{ height: 400 }}>
            <ResponsivePie
                data={data as MayHaveLabel[]}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={{ scheme: "paired" }}
                borderWidth={1}
                borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextColor="#333333"
                radialLabelsLinkColor={{ from: "color" }}
                sliceLabelsSkipAngle={10}
                sliceLabelsTextColor="#ffffff"
            />
        </div>
    );
};
