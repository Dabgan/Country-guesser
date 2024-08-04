import { Country } from '../../types/apiTypes';
import './countryCard.css';

export const CountryCard = ({ country }: { country: Country }) => {
    return (
        <div className="country-card">
            <img src={country.flags.png} alt={country.flags.alt} />
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Languages: {Object.values(country.languages).join(', ')}</p>
        </div>
    );
};
