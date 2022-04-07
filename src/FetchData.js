import React, { useState, useEffect } from "react";
import App from "./App";
const FetchData = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const url = "https://ghibliapi.herokuapp.com/films";
    const fetchedData = await fetch(url);
    const parsedData = await fetchedData.json();
    setData(parsedData);
  };
  useEffect(() => {
    fetchData();
  }, []); //No dependency to trigger in each page load
  return <App data={data} />;
};

export default FetchData;
