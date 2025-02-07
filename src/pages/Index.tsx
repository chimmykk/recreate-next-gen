import TimeDisplay from '../components/dashboard/TimeDisplay';
import UploadLogs from '../components/dashboard/UploadLogs';
import DonutChart from '../components/dashboard/DonutChart';
import ResultsCard from '../components/dashboard/ResultsCard';
import FileUpload from '../components/dashboard/FileUpload';

const Index = () => {
  return (
    <div className="min-h-screen bg-dashboard-background">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-dashboard-secondary">DASHBOARD</h1>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-sm text-gray-600 hover:text-dashboard-primary transition-colors">
                Settings
              </button>
              <button className="px-4 py-2 text-sm bg-dashboard-primary text-white rounded-md hover:bg-dashboard-accent transition-colors">
                Help
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Time Display */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex justify-center items-center animate-fade-up">
            <TimeDisplay />
          </div>

          {/* File Upload */}
          <div className="lg:col-span-2 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <FileUpload />
          </div>

          {/* Results */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <ResultsCard />
          </div>

          {/* Charts */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex justify-around">
              <DonutChart value={3.92} title="TimeStamp" />
              <DonutChart value={3.3} title="Boot-temp" />
            </div>
          </div>

          {/* Upload Logs */}
          <div className="lg:col-span-2 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <UploadLogs />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;