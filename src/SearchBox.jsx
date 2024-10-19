import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function Search({ updateWeatherInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "133e05c322e594671c899da17071dbef";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        temp_min: jsonResponse.main.temp_min,
        temp_max: jsonResponse.main.temp_max,
        wind_Speed: jsonResponse.wind.speed,
        feels_like: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
        humidity: jsonResponse.main.humidity,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let capitalize = (city)=>{
    city = city[0].toUpperCase()+city.slice(1).toLowerCase();
    return city
  }

  let handleInput = (event) => {
    let newValue = event.target.value;
    setCity(newValue);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      city = capitalize(city);
      setCity("");
      console.log(city);
      let newInfo = await getWeatherInfo();
      setError(false);
      updateWeatherInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        id="city"
        label="City name"
        variant="outlined"
        value={city}
        onChange={handleInput}
        required
      />
      <br></br>
      <br></br>
      <Button variant="contained" type="Submit">
        Search
      </Button>
      <br></br>
      {error && <p style={{marginTop: "15px"}}>No, such palce exist</p>}
    </form>
  );
}
