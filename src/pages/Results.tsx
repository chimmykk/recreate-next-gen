import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 3.2 },
  { name: 'Feb', value: 2.8 },
  { name: 'Mar', value: 3.1 },
  { name: 'Apr', value: 2.9 },
  { name: 'May', value: 3.3 },
  { name: 'Jun', value: 3.0 },
];

const metrics = [
  { name: 'Timestamp', value: '3.2%' },
  { name: 'Satag', value: '2.8%' },
  { name: 'Contaury', value: '3.1%' },
  { name: 'Confidence Score', value: '2.9%' },
];

const Results = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dashboard-background p-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="mb-6 px-4 py-2 text-dashboard-primary hover:text-dashboard-accent transition-colors"
        >
          ← Back to Dashboard
        </button>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-dashboard-secondary mb-6">RESULTS</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-4 mb-6">
                {metrics.map((metric) => (
                  <div key={metric.name} className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{metric.name}</span>
                    <span className="text-sm text-dashboard-primary font-semibold">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#33C3F0" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;