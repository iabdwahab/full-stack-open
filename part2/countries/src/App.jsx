import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";
import CountryInfo from "./components/CountryInfo";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [showedCountry, setShowedCountry] = useState(null);

  const handleChangeValue = (event) => {
    setSearchValue(event.target.value);
    setShowedCountry(null);
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
              <li key={country.cca3}>
                {country.name.common}{" "}
                <button onClick={() => setShowedCountry(country)}>Show</button>
              </li>
            ))}
          </ul>
        ) : filteredCountries.length === 1 ? (
          <CountryInfo
            name={filteredCountries[0].name.common}
            capital={filteredCountries[0].capital?.join(" - ") ?? "Not found!"}
            area={filteredCountries[0].area}
            languages={Object.values(filteredCountries[0].languages ?? {})}
            flags={filteredCountries[0].flags}
          />
        ) : (
          <p>No Countries</p>
        )}
        <div>
          {showedCountry ? (
            <CountryInfo
              name={showedCountry.name.common}
              capital={showedCountry.capital?.join(" - ") ?? "Not Found!"}
              area={showedCountry.area}
              languages={Object.values(showedCountry.languages ?? {})}
              flags={showedCountry.flags}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
