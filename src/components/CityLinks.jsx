import { Link } from 'react-router-dom';
import cities from '../data/Cities.js'
import CityInfo from './CityInfo.jsx'

export default function CityLinks() {
  return (
    <ul>
      {cities.map((city) =>
        city.route ? (
          <li key={city.name}>
            <Link to={city.route}>{city.name}</Link>
          </li>
        ) : (
          <li key={city.name}>
            <a href={city.url} target="_blank" onMouseOver={() => CityInfo(city.name)} rel="noopener noreferrer">
              {city.name}
            </a>
          </li>
        )
      )}
    </ul>
  );
}
