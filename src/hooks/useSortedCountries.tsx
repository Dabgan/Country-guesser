import { useEffect, useState } from 'react';
import { Country } from '../types/apiTypes';
import { fetchCountries } from '../api/fetchFilteredCountries';

const sortCountries = (sortOption: string, countries: Country[]) => {
    switch (sortOption) {
        case 'asc':
            return countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
        case 'desc':
            return countries.sort((a, b) => b.name.common.localeCompare(a.name.common));
        case 'population-asc':
            return countries.sort((a, b) => a.population - b.population);
        case 'population-desc':
            return countries.sort((a, b) => b.population - a.population);
        default:
            return countries;
    }
};

export const useSortedCountries = (filter: string, filterValue: string, sort: string) => {
    const [sortedCountries, setSortedCountries] = useState<Country[] | []>([]);

    useEffect(() => {
        fetchCountries(filter, filterValue).then(countries => {
            setSortedCountries(sortCountries(sort, countries));
        });
    }, [filter, filterValue, sort]);
    return sortedCountries;
};
