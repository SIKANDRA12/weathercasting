import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchBox.css";
export default function SearchBox({ updateInfo }) {

  let [city, setCity] = useState("");
  let [error, setError] = useState(false);


  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "a5cc3da4245825bdaac643523f43ec99";

  let getWhetherInfo = async () => {

    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        feelsLike: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        pressure: jsonResponse.main.pressure,
        weather: jsonResponse.weather[0].description,
        windSpeed: jsonResponse.wind.speed,
        windDegree: jsonResponse.wind.deg,
        visibility: jsonResponse.visibility,
      };
      console.log(result);
      return result;
    } catch(err){
        throw err;
      }    
  };


  let handlechange = (e) => {
    setCity(e.target.value);
  };
  let handleSubmit = async (e) => {

    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWhetherInfo();
      updateInfo(newInfo);
    }catch(err){
      setError(true);
      console.log("Error: ", err);
    }
    
  };
  return (
    <div className="searchBox">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City-name"
          variant="outlined"
          required
          onChange={handlechange}
          value={city}
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="success"
          type="submit"
        >
          Search
        </Button>
        <br />
        {error && <p style={{color:'red'}}>No such place exist</p>}
      </form>
    </div>
  );
}
