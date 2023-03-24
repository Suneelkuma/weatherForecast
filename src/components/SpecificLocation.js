import React, { useEffect, useState } from 'react'
import CurrentTimeDate from './CurrentTimeDate';
import "./specificlocation.css"
function SpecificLocation() {
  const [currentWeather, setCurrentWeather] = useState("");
  
 
  const API_KEY="ffa11e197746f0d8fcb53ba8791c44d6";
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setCurrentWeather({
              temperature: data.main.temp,
              wind:data.wind.speed,
              humidity:data.main.humidity,
              description:data.weather[0].icon,
              locationName:data.name,
              locationCountry:data.sys.country
            });
          });
      },
      error => console.error(error)
    );
  }, []);
// console.log(currentWeather);
  return (
    <div>
      
      <div className="container locations mt-4">
        <div className="row">
      <div className="flex  items-center justify-center text-white py-6">
        <h5 className='area' >Current Location:{currentWeather.locationName},{currentWeather.locationCountry}</h5>
        
        <div className="d-flex d-flex-row  items-center justify-content-between text-white py-3">
          {/* <label className='d-flex'>{currentWeather.description}</label> */}
          <img src={`http://openweathermap.org/img/wn/${currentWeather.description}@2x.png`} className='w-2 '  />
          <p className="d-flex flex-col space-y-2 align-self-center" >
          <i className='fas fa-temperature-high' style={{fontSize:"20px"}}></i>Current Temperature: {Math.ceil((currentWeather.temperature-32)*(5/9))}&#8451;
          </p>
          <div className="d-flex flex-column">
            <div className="d-flex items-center flex-column justify-content-center">
              <p className="mr-1"> <i className='fas fa-temperature-high' style={{fontSize:"24px"}}></i>Real fell:: <span className="ml-1">{Math.ceil((currentWeather.temperature-32)*(5/9))}&#8451;</span></p>
              <p className="mr-1"><i style={{fontSize:"24px"}}></i>Humidity:: <span className="ml-1">{currentWeather.temperature}%</span></p>
              <p className="mr-1"><i className='fas fa-wind' style={{fontSize:"24px"}}></i>Wind:: <span className="ml-1">{currentWeather.wind} km/h</span></p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <CurrentTimeDate/>
      </div>
    </div>
  )
}

export default SpecificLocation
