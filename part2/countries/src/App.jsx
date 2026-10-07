import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleChangeValue = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue.toLowerCase()),
  );

  console.log(filteredCountries);

  return (
    <>
      <div>
        find countries
        <input value={searchValue} onChange={handleChangeValue} />
        {filteredCountries.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : filteredCountries.length > 1 ? (
          <ul>
            {filteredCountries.map((country) => (
              <li key={country.cca3}>{country.name.common}</li>
            ))}
          </ul>
        ) : filteredCountries.length === 1 ? (
          <div>
            <h1>{filteredCountries[0].name.common}</h1>
            <p>Capital {filteredCountries[0].capital.join(" - ")}</p>
            <p>Area {filteredCountries[0].area}</p>

            <h2>Languages</h2>
            <ul>
              {Object.values(filteredCountries[0].languages).map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>

            <img
              src={filteredCountries[0].flags.svg}
              alt={filteredCountries[0].flags.alt}
              width={200}
            />
          </div>
        ) : (
          <p>No Countries</p>
        )}
      </div>
    </>
  );
}
