import { WiDaySunny } from "weather-icons-react";

const WeatherIcon = ({ weatherData }) => {
  return (
    <div>
      {weatherData?.weather?.[0]?.icon && (
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData.weather[0].description}
        />
      )}
    </div>
  );
};

export default WeatherIcon;
