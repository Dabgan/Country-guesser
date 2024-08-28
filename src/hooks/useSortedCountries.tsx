import { useEffect, useState } from 'react';
import { Country } from '../types/apiTypes';
import { fetchCountries } from '../api/fetchFilteredCountries';
import type { FilterType, SortingOption } from '../types/search';
import { SORTING_OPTIONS } from '../constants';

const sortCountries = (sortingOption: SortingOption, countries: Country[]) => {
    switch (sortingOption) {
        case SORTING_OPTIONS.ASC:
            return countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
        case SORTING_OPTIONS.DESC:
            return countries.sort((a, b) => b.name.common.localeCompare(a.name.common));
        case SORTING_OPTIONS.POPULATION_ASC:
            return countries.sort((a, b) => a.population - b.population);
        case SORTING_OPTIONS.POPULATION_DESC:
            return countries.sort((a, b) => b.population - a.population);
        default:
            return countries;
    }
};

export const useSortedCountries = (filter: FilterType, filterValue: string, sortingOption: SortingOption) => {
    const [sortedCountries, setSortedCountries] = useState<Country[] | []>([]);

    useEffect(() => {
        fetchCountries(filter, filterValue).then(countries => {
            setSortedCountries(sortCountries(sortingOption, countries));
        });
    }, [filter, filterValue, sortingOption]);
    return sortedCountries;
};
