import React, { useEffect, useState } from 'react'

const CurrentTimeDate = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
        setCurrentDate(new Date().toLocaleDateString());
      }, 1000);
      return () => clearInterval(timer);
    }, []);
  return (
    <div className='container' >
      <div className="d-flex justify-content-center text-white">
      <h2 className='m-2'>Date:{currentDate}</h2>
      <h2 className='m-2'>Time:{currentTime}</h2>
      </div>
    </div>
  )
}

export default CurrentTimeDate
