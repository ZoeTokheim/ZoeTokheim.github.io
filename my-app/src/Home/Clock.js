import React, { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [location, setLocation] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date().toLocaleDateString());
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(position.coords.latitude + ", " + position.coords.longitude);
        },
        (error) => {
          setLocation("Unable to retrieve location");
        }
      );
    } else {
      setLocation("Geolocation is not supported by this browser");
    }

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='clock'>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default Clock;
