import React from "react";
import { useGlobalContext } from "./Context";
import "./forecastlist.css"
const ForecastList = () => {
  const { dateList } = useGlobalContext();
  const slicedDateList = dateList.slice(0, 8);
  return (
    <div>
      <ul className="text-center">
        {slicedDateList.map((item) => {
          const { main, weather, wind, dt_txt } = item;

          return (
            <li className="d-flex m-2 justify-content-around forecast">
              <span>{dt_txt.slice(0, 10)},Time:{dt_txt.slice(11,19)}</span>
              <span>
                <img 
                  src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                  className="w-1 align-center"
                />
              </span>
              <span>Humidity:{main.humidity}</span>
              {/* <span>Wind:{wind.speed} km/h</span> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ForecastList;
