import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload } from 'lucide-react';

interface UploadItem {
  name: string;
  value: number;
}

const FileUpload = () => {
  const navigate = useNavigate();
  const [items] = useState<UploadItem[]>([
    { name: 'GTimestamp', value: 18 },
    { name: 'Timestamp', value: 25 },
    { name: 'Tokentemp', value: 32 }
  ]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // In a real app, we would handle file upload here
    console.log('File dropped');
  };

  const handleViewResults = () => {
    navigate('/results');
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-dashboard-secondary">Drag and Drop to Upload</h2>
      
      <div 
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-4 text-center hover:border-dashboard-primary transition-colors"
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-gray-600">Drag files here or click to upload</p>
      </div>

      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">{item.name}</span>
            <div className="flex items-center gap-2">
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-dashboard-primary h-2 rounded-full" 
                  style={{ width: `${item.value}%` }}
                />
              </div>
              <span className="text-xs text-gray-500">{item.value}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button className="px-4 py-2 bg-dashboard-secondary text-white rounded hover:bg-opacity-90 transition-colors">
          Download CS
        </button>
        <button 
          onClick={handleViewResults}
          className="px-4 py-2 bg-dashboard-primary text-white rounded hover:bg-opacity-90 transition-colors"
        >
          View Results
        </button>
      </div>
    </div>
  );
};

export default FileUpload;