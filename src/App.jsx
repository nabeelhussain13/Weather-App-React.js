import SearchBar from "./components/SearchBar";
import WeatherIcon from "./components/WeatherIcon";
import WeatherInfo from "./components/WeatherInfo";
import LoadingScreen from "./components/LoadingScreen";
import EmptyState from "./EmptyState";
import "./App.css";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const [cityName, setCityName] = useState("");
  const [fetching, setFetching] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setFetching(true);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=084e9b70b36cbdbe8db712d21510b0f4&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setCityName("");
      })
      .finally(() => setFetching(false));

    setIsClicked(false);
  }, [isClicked]);

  const onChangeHandler = (event) => {
    setCityName(event.target.value);
  };

  const onClickHandler = () => {
    setIsClicked(true);
  };

  return (
    <center className="app-container">
      <SearchBar
        cityName={cityName}
        onChangeHandler={onChangeHandler}
        onClickHandler={onClickHandler}
      ></SearchBar>
      {fetching ? (
        <LoadingScreen />
      ) : weatherData?.name ? (
        <>
          <WeatherIcon weatherData={weatherData} />
          <WeatherInfo weatherData={weatherData} />
        </>
      ) : (
        <EmptyState />
      )}
    </center>
  );
};

export default App;
