const WeatherInfo = ({ weatherData }) => {
  return (
    <div>
      <p className="temp">
        {Math.trunc(weatherData?.main?.temp)}
        <sup>°</sup>C
      </p>
      <p className="cloud-info">{weatherData?.weather?.[0]?.description}</p>

      <p className="city-name">
        {weatherData?.name}, {weatherData?.sys?.country}
      </p>

      <div className="weather-props">
        <span className="prop">
          Feels like: {Math.trunc(weatherData?.main?.feels_like)}
          <sup>°</sup>C
        </span>
        <span className="prop">Humidity: {weatherData?.main?.humidity}%</span>
        <span className="prop">Wind: {weatherData?.wind?.speed} km/h</span>
      </div>
    </div>
  );
};

export default WeatherInfo;
