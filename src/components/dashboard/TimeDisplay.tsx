import { useEffect, useState } from 'react';

const TimeDisplay = () => {
  const [time, setTime] = useState('00:00');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-32 h-32">
      <div className="absolute inset-0 rounded-full border-4 border-dashboard-primary opacity-20"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-dashboard-secondary">{time}</span>
      </div>
    </div>
  );
};

export default TimeDisplay;