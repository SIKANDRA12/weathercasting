import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./searchBox";
import "./weatherApp.css";
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 34.85,
        humidity: 9,
        pressure: 1004,
        temp: 37.86,
        tempMax: 37.86,
        tempMin: 37.86,
        visibility: 10000,
        weather: "clear sky",
        windDegree: 293,
        windSpeed: 4.75,
    });
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo)
    }
  return (
    <div className="weatherApp">
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo}/>
      <br />
      <InfoBox info={weatherInfo} />
    </div>
  );
}