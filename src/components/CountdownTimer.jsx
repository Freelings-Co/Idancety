import { useState, useEffect, useCallback } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(targetDate) - new Date();
    
    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
  }, [targetDate]);

  useEffect(() => {
    // Initial calculation
    const initialTimeLeft = calculateTimeLeft();
    if (initialTimeLeft) {
      setTimeLeft(initialTimeLeft);
    }

    // Set up interval for countdown
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft) {
        setTimeLeft(newTimeLeft);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const timeValues = [
    { value: timeLeft.days, label: 'dias' },
    { value: timeLeft.hours, label: 'horas' },
    { value: timeLeft.minutes, label: 'minutos' },
    { value: timeLeft.seconds, label: 'segundos' },
  ];

  return (
    <div className="countdown-timer">
      {timeValues.map((item, index) => (
        <div key={index} className="countdown-item">
          <span className="countdown-value">
            {item.value.toString().padStart(2, '0')}
          </span>
          <span className="countdown-label">
            {item.label.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
