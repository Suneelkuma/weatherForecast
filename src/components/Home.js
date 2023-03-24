import React from 'react'
import "./favouriteplaces.css"
import FavouritePlaces from './FavouritePlaces'

import "./favouriteplaces.css"
import SpecificLocation from './SpecificLocation'
import CurrentTimeDate from './CurrentTimeDate'

function Home() {
  return (
   <> 
 <div className="container-fluid " >
   <div className="container  "  >
   
   <div className="row">
    <div className="row ">
        <div className="col-12 mt-3">
        <FavouritePlaces/>
        </div>
    </div>
    <div className="row ">
        <div className="col-12 mt-2">
          
            {/* <CurrentTimeDate/> */}
        </div>
    </div>
    <div className="row ">
        <div className="col-12 mt-2">
          
            <SpecificLocation/>
        </div>
    </div>
    </div>
  </div>
  </div>
  </>
  )
}

export default Home
