import { useEffect, useState } from 'react';

interface Log {
  id: number;
  message: string;
  timestamp: string;
}

const UploadLogs = () => {
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    // Simulate loading logs
    setLogs([
      { id: 1, message: "File upload completed", timestamp: "2 min ago" },
      { id: 2, message: "Processing started", timestamp: "5 min ago" },
      { id: 3, message: "Validation successful", timestamp: "8 min ago" },
      { id: 4, message: "Initial upload request", timestamp: "10 min ago" },
    ]);
  }, []);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-dashboard-secondary">Upload Logs</h2>
      <div className="space-y-3">
        {logs.map((log) => (
          <div
            key={log.id}
            className="flex justify-between items-center p-2 hover:bg-gray-50 rounded transition-colors"
          >
            <span className="text-sm text-gray-700">{log.message}</span>
            <span className="text-xs text-gray-500">{log.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadLogs;