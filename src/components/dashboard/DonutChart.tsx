import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface DonutChartProps {
  value: number;
  title: string;
}

const DonutChart = ({ value, title }: DonutChartProps) => {
  const data = [
    { value: value },
    { value: 100 - value },
  ];

  const COLORS = ['#33C3F0', '#E5E7EB'];

  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={25}
              outerRadius={35}
              fill="#8884d8"
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="text-center mt-2">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-xl font-bold text-dashboard-secondary">{value}%</p>
      </div>
    </div>
  );
};

export default DonutChart;