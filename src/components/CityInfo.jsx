import cities from '../data/Cities.js';

export default function CityLinks({ name }) {
  const city = cities.find((city) => city.name === name);

  return (
    <div>
      {city ? <p>{city.name}</p> : <p>Ciutat no trobada</p>}
    </div>
  );
}
