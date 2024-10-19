import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import Search from "./SearchBox";

export default function InfoBox({ info }) {
  const initImageSummer =
    "https://images.unsplash.com/photo-1533739331049-c6a02504f54f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvdCUyMHBsYWNlc3xlbnwwfHwwfHx8MA%3D%3D";

  const initImageSemiCold =
    "https://images.unsplash.com/photo-1453033999175-4ed3ad562807?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbGQlMjB3ZXRoZXJ8ZW58MHx8MHx8fDA%3D";

  const initImageCold =
    "https://images.unsplash.com/photo-1675600025372-f7aac0ccb76f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdldGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let capital = (city) => {
    city = city[0].toUpperCase() + city.slice(1).toLowerCase();
  };
  
  let image;

  if(info.temp > 25){
    image = initImageSummer;
  }else if(info.temp < 25 && info.temp > 0){
    image = initImageSemiCold;
  }else{
    image = initImageCold;
  }

  return (
    <div className="card">
      <Card className="cardInfo" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image = {image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <h3>Temperature: {info.temp}&deg;C</h3>
            <h3>min Temp: {info.temp_min}&deg;C</h3>
            <h3>max Temp: {info.temp_max}&deg;C</h3>
            <h3>Wind Speed: {info.wind_Speed} m/sec</h3>
            <h3>
              Temperature that you actually feels like: {info.feels_like}&deg;C
            </h3>
            <h3>
              Weather:{" "}
              <b style={{ backgroundColor: "#E8E9F3" }}>{info.weather}</b>
            </h3>
            <h3>Humidity: {info.humidity} g/m3</h3>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
