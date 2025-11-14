import react from "react"
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import '../Styles/Weather.css'
import WeatherDetails from "./WeatherDetails";


function Weather() {
  const [WeatherData, setWeatherData] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const Search = async (city) => {
    if (city == "") {
      alert("Enter city name!");
      return;
    }

    setLoading(true); 
   

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        setLoading(false);
        return;
      }

      setWeatherData({
        humidity: data.main.humidity,
        temp: data.main.temp,
        location: data.name,
        icon: data.weather[0].icon,
        wind_speed: data.wind.speed,
      });
    } 
    catch (error) {
      console.error("Internal Server Error!", error);
      setWeatherData(false);
    }
     finally {
      setLoading(false); 
    }
  };

  return (
    <div className="weather">
      <div className="search-bar">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter City Name"
          onKeyDown={(e) => e.key === "Enter" && Search(inputRef.current.value)}
        />
        <div id="search-icon">
          <FontAwesomeIcon
            icon={faMagnifyingGlassLocation}
            onClick={() => Search(inputRef.current.value)}
          />
        </div>
      </div>

      {/*Show loader while loading */}
      {loading && <Loader />}

      {/* weather data after load */}
      {!loading && WeatherData && <WeatherDetails WeatherData={WeatherData} />}
    </div>
  );
}

function Loader() {
  return (
    <div id="outerCircle">
      <div id="innerCircle"></div>
    </div>
  );
}

export default Weather;
