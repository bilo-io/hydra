import React from 'react';
import LineChart from './LineChart';
import AreaChart from './AreaChart';
import BarChart from './BarChart';
import RadarChart from './RadarChart';
import ScatterChart from './ScatterChart';
import View from '../../View';

const Example: React.FC = () => {
    const lineChartData = [
        { name: 'Jan', uv: 4000, pv: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398 },
        { name: 'Mar', uv: 2000, pv: 9800 },
        { name: 'Apr', uv: 2780, pv: 3908 },
    ];

    const areaChartData = [
        { name: 'Jan', sales: 400, revenue: 240 },
        { name: 'Feb', sales: 300, revenue: 200 },
        { name: 'Mar', sales: 200, revenue: 180 },
        { name: 'Apr', sales: 270, revenue: 220 },
    ];

    const barChartData = [
        { name: 'Jan', sales: 400, revenue: 240 },
        { name: 'Feb', sales: 300, revenue: 200 },
        { name: 'Mar', sales: 200, revenue: 180 },
        { name: 'Apr', sales: 270, revenue: 220 },
    ];

    const radarChartData = [
        { subject: 'Math', A: 120, B: 110, C: 130 },
        { subject: 'English', A: 100, B: 90, C: 100 },
        { subject: 'Science', A: 130, B: 120, C: 150 },
        { subject: 'History', A: 90, B: 80, C: 110 },
    ];

    const scatterChartData = [
        { x: 1, y: 2, name: 'Point 1' },
        { x: 2, y: 3, name: 'Point 2' },
        { x: 3, y: 5, name: 'Point 3' },
        { x: 4, y: 4, name: 'Point 4' },
    ];

    return (
        <View className='w-80 h-fit'>
            <LineChart
                data={lineChartData}
                lines={[
                    { key: 'uv', color: '#8884d8' },
                    { key: 'pv', color: '#82ca9d' },
                ]}
                xAxisKey="name"
                yAxisLabel="Value"
            />

            <AreaChart
                data={areaChartData}
                areas={[
                    { key: 'sales', color: '#8884d8' },
                    { key: 'revenue', color: '#82ca9d' },
                ]}
                xAxisKey="name"
                yAxisLabel="Amount"
            />

            <BarChart
                data={barChartData}
                bars={[
                    { key: 'sales', color: '#8884d8' },
                    { key: 'revenue', color: '#82ca9d' },
                ]}
                xAxisKey="name"
                yAxisLabel="Amount"
            />

            <RadarChart
                data={radarChartData}
                radar={[
                    { key: 'A', color: '#8884d8' },
                    { key: 'B', color: '#82ca9d' },
                    { key: 'C', color: '#ff6347' },
                ]}
                angleAxisKey="subject"
                radiusAxisKey="A"
            />

            <ScatterChart
                data={scatterChartData}
                points={[
                    { key: 'name', color: '#8884d8' },
                ]}
                xAxisKey="x"
                yAxisKey="y"
            />
        </View>
    );
};

export default Example;
