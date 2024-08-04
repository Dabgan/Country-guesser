export const fetchCountries = async (filter: string, filterValue: string) => {
    const API_URL = 'https://restcountries.com/v3.1/';
    const API_URL_PARAMS = '?fields=name,capital,languages,currencies,flags,population';

    if (!filter && !filterValue) return [];

    try {
        const response = await fetch(`${API_URL}${filter}/${filterValue}${API_URL_PARAMS}`);
        if (!response.ok) {
            return [];
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
