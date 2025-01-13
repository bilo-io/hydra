import { AreaChart } from "./AreaChart";
import { BarChart } from "./BarChart";
import { PieChart } from "./PieChart";
import { RadarChart } from "./RadarChart";
import { ScatterChart } from "./ScatterChart";

const App = () => {
    const areaData = [
        { time: "2023-01", value: 120 },
        { time: "2023-02", value: 200 },
    ];

    const barData = [
        { category: "A", series1: 150, series2: 200 },
        { category: "B", series1: 250, series2: 300 },
    ];

    const pieData = [
        { label: "JavaScript", count: 40 },
        { label: "Python", count: 30 },
    ];

    const radarData = [
        { strength: 80, speed: 70, endurance: 90 },
        { strength: 60, speed: 50, endurance: 70 },
    ];

    const scatterData = [
        { x: 10, y: 20 },
        { x: 15, y: 25 },
    ];

    return (
        <div>
            <AreaChart data={areaData} xKey="time" yKey="value" />
            {/* <BarChart data={barData} xKey="category" yKeys={["series1", "series2"]} />
            <PieChart data={pieData} nameKey="label" valueKey="count" />
            <RadarChart
                data={radarData}
                indicator={[
                    { name: "Strength", max: 100 },
                    { name: "Speed", max: 100 },
                    { name: "Endurance", max: 100 },
                ]}
            />
            <ScatterChart data={scatterData} xKey="x" yKey="y" /> */}
        </div>
    );
};

export default App;
