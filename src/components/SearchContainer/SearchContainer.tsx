import { useState, useCallback } from 'react';
import { SearchInput } from '../SearchInput/SearchInput';
import { CountryList } from '../CountryList/CountryList';
import { SelectFilter } from '../SelectFilter/SelectFilter';
import { SelectSort } from '../SelectSort/SelectSort';
import { useSortedCountries } from '../../hooks/useSortedCountries';
import { FILTER_OPTIONS } from '../../constants';
import type { FilterType, SortingOption } from '../../types/search';
import './searchContainer.css';

export const SearchContainer = () => {
    const [filter, setFilter] = useState<FilterType>(FILTER_OPTIONS.NAME);
    const [filterValue, setFilterValue] = useState('');
    const [sortingOption, setSortingOption] = useState<SortingOption>('');

    const sortedCountries = useSortedCountries(filter, filterValue, sortingOption);

    const setFilterValueCallback = useCallback(setFilterValue, [setFilterValue]);
    const setFilterCallback = useCallback(setFilter, [setFilter]);
    const setSortCallback = useCallback(setSortingOption, [setSortingOption]);

    return (
        <>
            <h2 className="main-title">Search Country</h2>
            <div className="search-container">
                <SelectFilter value={filter} onChange={setFilterCallback} />
                <SelectSort sortingOption={sortingOption} onChange={setSortCallback} />
            </div>
            <SearchInput value={filterValue} onChange={setFilterValueCallback} />
            <CountryList countries={sortedCountries} />
        </>
    );
};
