import React, { useEffect, useState } from "react";
import useDate from "../Utils/useDate";
import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import fog from "../assets/icons/fog.png";
import windy from "../assets/icons/windy.png";
import "../index.css";
const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes("cloud")) {
        setIcon(cloud);
      }
      if (iconString.toLowerCase().includes("rain")) {
        setIcon(rain);
      }
      if (iconString.toLowerCase().includes("sun")) {
        setIcon(sun);
      }
      if (iconString.toLowerCase().includes("snow")) {
        setIcon(snow);
      }
      if (iconString.toLowerCase().includes("thunder")) {
        setIcon(storm);
      }
      if (iconString.toLowerCase().includes("fog")) {
        setIcon(fog);
      }
      if (iconString.toLowerCase().includes("wind")) {
        setIcon(windy);
      }
    }
  }, [iconString]);
  return (
    <div className="w-[28rem] min-w-[22rem] h-[30rem] ">
      <div className="flex w-full justify-center items-center gap-4 mt-12 mb-4 ">
        <img src={icon} alt="weather_icon" />
        <p className="font-bold text-5xl flex justify-center items-center">
          {temperature} &deg;C
        </p>
      </div>
      <div className="font-bold text-center text-xl">{place}</div>
      <div className="w-full flex justify-center items-center mt-4">
        <p className="flex-1 text-center p-2">{new Date().toDateString()}</p>
        <p className="flex-1 text-center p-2">{time}</p>
      </div>
      <div className="w-full flex mt-4 gap-3">
        <p className="flex-1 text-center p-2 font-bold bg-blue-500 shadow-xl rounded-lg">
          Wind Speed - <p className="font-normal">{windspeed}</p>
        </p>
        <p className="flex-1 text-center p-2 font-bold rounded-lg bg-green-500">
          Humidity - <p className="font-normal">{humidity}</p>
        </p>
      </div>
      <div className="w-full p-3 mt-4 flex justify-between items-center">
        <p className="font-semibold text-lg">Heat Index:</p>
        <p className="text-lg">{heatIndex ? heatIndex : "NA"}</p>
      </div>
      <hr className="bg-slate-600"/>
      <div className="w-full p-4 flex justify-center items-center text-3xl font-semibold">
        {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;
