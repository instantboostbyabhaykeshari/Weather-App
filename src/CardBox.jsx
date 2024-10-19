import { useState } from "react";
import InfoBox from "./InfoBox";
import Search from "./SearchBox";

export default function CardBox() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 33.65,
    humidity: 24,
    temp: 35.05,
    temp_max: 35.05,
    temp_min: 35.05,
    weather: "Haze",
    wind_Speed: 2.06,
  });

  let updateWeatherInfo = (result) => {
    setWeatherInfo(result);
  };

  let footerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    marginTop: "15px",
    backgroundColor: "black",
    color: "white",
    height: "50px",
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px" }}>Weather App</h2>
      <Search updateWeatherInfo={updateWeatherInfo} />
      <InfoBox info={weatherInfo} />
      <footer style={footerStyle}>
        &copy; copyright by-Abhay. All rights reserved.
      </footer>
    </div>
  );
}
