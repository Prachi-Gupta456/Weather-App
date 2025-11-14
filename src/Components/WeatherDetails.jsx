import windspeed from '../assets/wind-speed.png'
import humidity from '../assets/humidity-icon.png'


export default function WeatherDetails({WeatherData}) {

return( 
  <>
      <div className="weather-card">

        {/* showing weather icon here*/}

        <img id="weather-icon-image" src={`https://openweathermap.org/img/wn/${WeatherData.icon}@2x.png`} ></img>
        {/*  */}

        {/* temperature and city name here*/}
        <p className='temperature'>{WeatherData.temp}<sup>o</sup>C</p>
        <p className='location'>{WeatherData.location}</p>

        {/*  */}


        {/* weather data displayed here */}
        <div className="weather-data">

          {/* wind speed data */}
          <div className="wind-speed">
            <img src={windspeed} alt="wind-speed"></img>
            <p>{WeatherData.wind_speed} km/h</p>
            <p id="wind-speed-text">Wind Speed</p>
          </div>
          {/*  */}

          {/* Humidity data */}
          <div className="wind-humidity">
            <img src={humidity} alt="humidity"></img>
            <p>{WeatherData.humidity}</p>
            <p id="wind-humidity-text">Humidity</p>
          </div>
          {/*  */}
        </div>
        {/*  */}

      </div>
      {/*  */}
  </>
)
}
