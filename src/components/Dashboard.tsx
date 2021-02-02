import { useEffect, useState } from "react";
import Clock from "./Clock";
import Weather from "./Weather";
import Quotes from "./Quotes";
import Greeting from "./Greeting";

const APIKEY = process.env.REACT_APP_ACCESSKEY;

const Dashboard = () => {
  const [weatherData, setweatherData] = useState({
    temperature: "",
    location: "",
    icon: "",
  });

  useEffect(() => {
    const fetchWeatherData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=Phoenix,us&units=imperial&&appid=${APIKEY}`;
      const result = await fetch(url);

      const weatherEvents = await result.json();

      setweatherData({
        temperature: weatherEvents.list[0].main.temp,
        location: weatherEvents.city.name,
        icon: weatherEvents.list[0].weather[0].icon,
      });

      console.log(weatherEvents);
    };
    fetchWeatherData();
  }, []);
  return (
    <div className="text-white pt-4 px-10 font-poppins">
      <div className="flex justify-between pt-20">
        <h1 className="text-4xl">{<Greeting />}</h1>
        <Clock />
      </div>
      <div className="mt-10 text-2xl px-2">
        <Weather
          temperature={weatherData.temperature}
          location={weatherData.location}
          icon={weatherData.icon}
        />
      </div>
      <div className="flex items-center text-center">
        <Quotes />
      </div>
    </div>
  );
};

export default Dashboard;
