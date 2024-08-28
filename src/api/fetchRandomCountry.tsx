import { Country } from '../types/apiTypes';

export const fetchRandomCountry = async (): Promise<Country | null> => {
    const API_URL = 'https://restcountries.com/v3.1/all';
    const API_URL_PARAMS = '?fields=name,capital,languages,currencies,flags,population';

    try {
        const response = await fetch(`${API_URL}${API_URL_PARAMS}`);
        if (!response.ok) {
            return null;
        }
        const data: Country[] = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};
