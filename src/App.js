import Style from "./App.module.css";
import Home from "./Components/Pages/Home/Home";
import Loading from "./Components/Loading/Loading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/Pages/AboutAnime/About";
import { useState } from "react";
import DarkMode from "./Components/DarkMode/DarkMode";
import StyleElement from "./Components/StyleElement/StyleElement";

function App({ data }) {
  const [darkMode, setDarkMode] = useState(false);
  const [animeName, setAnimeName] = useState(sessionStorage.getItem("name"));

  return (
    <>
      <BrowserRouter>
        {data.length !== 0 ? (
          <div className={Style["app"]}>
            <div>
              <StyleElement darkMode={darkMode} />
              <Routes>
                <Route
                  path="/"
                  element={<Home data={data} setAnimeName={setAnimeName} />}
                />
                <Route path={animeName} element={<About data={data} />} />
              </Routes>
              <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          </div>
        ) : (
          <div className={Style["loader"]}>
            <Loading />
          </div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
