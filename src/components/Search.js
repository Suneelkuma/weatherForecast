import React, { useState } from "react";
import { useGlobalContext } from "./Context";
import "./Search.css"
const Search = () => {
  const [name,setName]=useState("")
  const { query, setQuery, isError } = useGlobalContext();
const handleClick=()=>{
  setQuery(name)
  setName("")
}
  return (
    <>
      <section className="container ">
        <h2 style={{color:"green"}}>Search Your City</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div className="container">
            <div class="row g-3 align-items-center">

  <div class="col-auto">
    <input   className="input"
              type="text"
              placeholder="search city"
              value={name}
              onChange={(e) => setName(e.target.value)}   class="form-control" aria-describedby="passwordHelpInline"/>
  </div>
  <div class="col-auto">
  <btn className="btn btn-primary" onClick={handleClick}>Search</btn> 
  </div>
</div>

           
            
          </div>
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  );
};

export default Search;

