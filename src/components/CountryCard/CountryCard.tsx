import { Country } from '../../types/apiTypes';
import './countryCard.css';

type CountryCardProps = {
    country: Country;
    guessMode: boolean;
};

export const CountryCard: React.FC<CountryCardProps> = ({ country, guessMode }) => {
    return (
        <div className="country-card">
            <img src={country.flags.png} alt={country.flags.alt} />
            {!guessMode && (
                <>
                    <h2>{country.name.common}</h2>
                    <p>Capital: {country.capital}</p>
                    <p>Languages: {Object.values(country.languages).join(', ')}</p>
                </>
            )}
        </div>
    );
};
