import React from 'react';
import { Download } from 'lucide-react';
import DonutChart from './DonutChart';

const DownloadProgress = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-dashboard-background rounded-full flex items-center justify-center">
          <Download className="w-5 h-5 text-dashboard-primary" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-600">Download Progress</h3>
          <p className="text-xs text-gray-400">Current Status</p>
        </div>
      </div>
      <DonutChart value={30} title="Progress" />
    </div>
  );
};

export default DownloadProgress;