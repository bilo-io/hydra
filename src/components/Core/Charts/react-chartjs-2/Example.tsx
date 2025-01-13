import LineChart from './LineChart';
import AreaChart from './AreaChart';
import BarChart from './BarChart';
import RadarChart from './RadarChart';
import ScatterChart from './ScatterChart';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    ArcElement,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    ArcElement, 
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


interface SalesData {
    name: string;
    sales: number;
    revenue: number;
    uv: number;
    pv: number;
}

const data: SalesData[] = [
    { name: 'Jan', sales: 50, revenue: 200, uv: 400, pv: 240 },
    { name: 'Feb', sales: 80, revenue: 300, uv: 300, pv: 139 },
    { name: 'Mar', sales: 45, revenue: 180, uv: 200, pv: 980 },
];

const App = () => (
    <div>
        <LineChart<SalesData>
            data={data}
            lines={[
                { key: 'uv', color: '#0000FF' }, // Blue
                { key: 'pv', color: '#008000' }, // Green
            ]}
            xAxisKey="name"
        />
        <AreaChart<SalesData>
            data={data}
            areas={[
                { key: 'sales', color: '#FFA500' }, // Orange
                { key: 'revenue', color: '#0000FF' }, // Blue
            ]}
            xAxisKey="name"
        />
        <BarChart<SalesData>
            data={data}
            bars={[
                { key: 'sales', color: '#FF0000' }, // Red
                { key: 'revenue', color: '#008000' }, // Green
            ]}
            xAxisKey="name"
        />
        <RadarChart<SalesData>
            data={data}
            radar={[
                { key: 'sales', color: '#800080' }, // Purple
            ]}
            angleAxisKey="name"
        />
        <ScatterChart<SalesData>
            data={data}
            xAxisKey="sales"
            yAxisKey="revenue"
            pointColor="#008000" // Green
        />
    </div>
);

export default App;
