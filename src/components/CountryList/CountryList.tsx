import { Country } from '../../types/apiTypes';
import { CountryCard } from '../CountryCard/CountryCard';
import './countryList.css';

export const CountryList: React.FC<{ countries: Country[] }> = ({ countries }) => (
    <ul className="country-list">
        {countries.map(country => (
            <CountryCard key={country.name.common} country={country} />
        ))}
    </ul>
);
