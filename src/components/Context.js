import React, { useContext, useEffect, useState } from "react";

const Appcontext = React.createContext();

const API_KEY = "ffa11e197746f0d8fcb53ba8791c44d6";
//api.openweathermap.org/data/2.5/forecast/daily?id={city ID}&cnt={cnt}&appid={API key}
const API_URL = `https://api.openweathermap.org/data/2.5/forecast?`;

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dateList, setdateList] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("");

  const getCities = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    if (data.cod === "200") {
      setIsLoading(false);
      setdateList(data.list);
    } else {
      setIsError({
        show: true,
        // msg: data.message,
      });
    }
  };

  useEffect(() => {
    const timeid = setTimeout(() => {
      getCities(`${API_URL}q=${query}&cnt=${8}&appid=${API_KEY}`);
    }, 1000);
    return () => clearTimeout(timeid);
  }, [query]);

  return (
    <Appcontext.Provider value={{ isError, isLoading, dateList, query, setQuery }}>
      {children}
    </Appcontext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(Appcontext);
};

export { Appcontext, AppProvider, useGlobalContext };