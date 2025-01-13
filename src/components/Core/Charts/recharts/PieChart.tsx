import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';

export type PieChartData = {
    name: string;
    value: number;
};

interface PieChartComponentProps {
    data: PieChartData[];
    colors: string[];
    innerRadius?: number;
    outerRadius?: number;
}

const PieChartComponent: React.FC<PieChartComponentProps> = ({
    data,
    colors,
    innerRadius = 40,
    outerRadius = 80,
}) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    fill="#8884d8"
                    label
                >
                    {data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default PieChartComponent;
