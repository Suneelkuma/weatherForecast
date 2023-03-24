import React, { useState } from "react";
import "./favouriteplaces.css"
function FavouritePlaces() {
  const [name, setName] = useState([
    {
      id: 1,
      city: "Noida",
    },
    {
      id: 2,
      city: "Lucknow",
    },
    {
      id: 3,
      city: "Varanasi",
    },
    {
      id: 4,
      city: "Bengluru",
    },
    {
      id: 5,
      city: "Hyderabad",
    },
  ]);
  return (
    <div className=" flex-row justify-content-between m-3 screen1 p-2" style={{    display: "flex"}}>
      {name.map((place) => 
        <h3 className="places" key={place.id} >
          {place.city}
        </h3>
      )}
    </div>
  );
}

export default FavouritePlaces;
