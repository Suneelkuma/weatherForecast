import Home from "./components/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchWeather from "./components/SearchWeather";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/search" element={<SearchWeather />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
