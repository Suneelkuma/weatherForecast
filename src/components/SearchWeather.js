import React from 'react'
import ForecastList from './ForecastList'
import Search from './Search'

function SearchWeather() {
  return (
    <div>
      <div className="container">
     <Search/>
     <ForecastList/>
      </div>
   
    </div>
  )
}

export default SearchWeather
