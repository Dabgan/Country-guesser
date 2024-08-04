import { Country } from '../types/apiTypes';
import { CountryCard } from './CountryCard';

export const CountryList = ({ countries }: { countries: Country[] }) => {
    console.log('rerender list!');
    return (
        <ul>
            {countries.map(country => (
                <CountryCard key={country.name.common} country={country} />
            ))}
        </ul>
    );
};
