export default function CountryInfo({ name, capital, area, languages, flags }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Capital {capital}</p>
      <p>Area {area}</p>

      <h2>Languages</h2>
      <ul>
        {languages.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>

      <img src={flags.svg} alt={flags.alt} width={200} />
    </div>
  );
}
