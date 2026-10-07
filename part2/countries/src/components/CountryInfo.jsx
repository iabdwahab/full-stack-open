import { useEffect } from "react";

import axios from "axios";
import { useState } from "react";

export default function CountryInfo({ country }) {
  const { name, capital, area, languages, flags, capitalInfo } = country;
  const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    setWeather(null);

    if (capitalInfo?.latlng) {
      axios
        .get(
          `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${capitalInfo?.latlng?.join(",")}`,
        )
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [country]);

  console.log(weather);

  return (
    <div>
      <h1>{name.common}</h1>
      <p>Capital {capital?.join(" - ") ?? "Not Found!"}</p>
      <p>Area {area}</p>

      <h2>Languages</h2>
      <ul>
        {Object.values(languages ?? {}).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>

      <img src={flags.svg} alt={flags.alt} width={200} />

      {weather ? (
        <>
          <h2>Weather in {capital[0]}</h2>
          <p>Temperature {weather.current.temp_c} Celsius</p>
          <img
            src={`https:${weather.current.condition.icon}`}
            alt={weather.current.condition.text}
          />
          <p>Wind {weather.current.wind_kph} km/h</p>
        </>
      ) : null}
    </div>
  );
}
