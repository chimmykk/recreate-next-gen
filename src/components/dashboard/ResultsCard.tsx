const ResultsCard = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-2 text-dashboard-secondary">RESULTS</h2>
      <div className="flex items-end space-x-2">
        <span className="text-4xl font-bold text-dashboard-primary">330</span>
        <span className="text-sm text-gray-500 mb-1">Confidence Score</span>
      </div>
      <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
        <div className="bg-dashboard-primary h-2 rounded-full" style={{ width: '75%' }}></div>
      </div>
    </div>
  );
};

export default ResultsCard;