import { Country } from '../../types/apiTypes';
import './countryCard.css';

type CountryCardProps = {
    country: Country;
    isGuessMode?: boolean;
};

export const CountryCard: React.FC<CountryCardProps> = ({ country, isGuessMode = false }) => {
    return (
        <div className="country-card">
            <img src={country.flags.png} alt={country.flags.alt} />
            {!isGuessMode && (
                <>
                    <h2>{country.name.common}</h2>
                    <p>Capital: {country.capital}</p>
                    <p>Languages: {Object.values(country.languages).join(', ')}</p>
                </>
            )}
        </div>
    );
};
