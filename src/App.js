import { useState, useEffect } from 'react';

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);  
  const [timerId, setTimerId] = useState(null);  

 
  const handleStart = () => {
    if (!timerId) {  
      const id = setInterval(() => {
        setSeconds(prev => prev + 1);  
      }, 1000);
      setTimerId(id);  
    }
  };


  const handleStop = () => {
    if (timerId) {
      clearInterval(timerId);  
      setTimerId(null); 
    }
  };


  useEffect(() => {
    return () => {
      if (timerId) {
        clearInterval(timerId); 
      }
    };
  }, [timerId]);  
  return (
    <div className="p-12 mx-auto space-y-4 max-w-[300px]">
      <div className="font-bold text-center text-3xl">Zamanlayıcı: {seconds}s</div>
      <div className="flex justify-between">
        <button
          className="text-amber-500 font-bold"
          onClick={handleStop}
          disabled={!timerId}  
        >
          Durdur
        </button>
        <button
          className="text-green-500 font-bold"
          onClick={handleStart}
          disabled={!!timerId}  
        >
          Başlat
        </button>
      </div>
    </div>
  );
}
