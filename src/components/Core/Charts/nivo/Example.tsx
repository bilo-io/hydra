import { AreaChart } from "./AreaChart";
import { BarChart } from "./BarChart";
import { PieChart } from "./PieChart";
import { RadarChart } from "./RadarChart";
import { ScatterChart } from "./ScatterChart";

const App = () => {
    const areaData = [
        { id: "A", data: [{ x: 0, y: 2 }, { x: 1, y: 3 }] },
        { id: "B", data: [{ x: 0, y: 1 }, { x: 1, y: 4 }] },
    ];

    const barData = [
        { country: "AD", hotdog: 100, burger: 150 },
        { country: "AE", hotdog: 120, burger: 200 },
    ];

    const pieData = [
        { id: "javascript", value: 55 },
        { id: "typescript", value: 45 },
    ];

    const radarData = [
        { taste: "fruity", A: 120, B: 80 },
        { taste: "spicy", A: 60, B: 90 },
    ];

    const scatterData = [
        {
            id: "group A",
            data: [{ x: 10, y: 20 }, { x: 20, y: 30 }],
        },
    ];

    return (
        <div>
            <AreaChart data={areaData} />
            <BarChart data={barData} keys={["hotdog", "burger"]} indexBy="country" />
            <PieChart data={pieData} valueKey={""} idKey={""} />
            <RadarChart data={radarData} keys={["A", "B"]} indexBy="taste" />
            <ScatterChart data={scatterData} xKey={""} yKey={""} />
        </div>
    );
};

export default App;
