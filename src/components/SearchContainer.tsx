import { useState, useCallback } from 'react';
import { SearchInput } from './SearchInput';
import { CountryList } from './CountryList';
import { SelectFilter } from './SelectFilter';
import { SelectSort } from './SelectSort';

import { useSortedCountries } from '../hooks/useSortedCountries';

export const SearchContainer = () => {
    const [filter, setFilter] = useState('name');
    const [filterValue, setFilterValue] = useState('');
    const [sort, setSort] = useState('asc');

    const sortedCountries = useSortedCountries(filter, filterValue, sort);

    const setFilterValueCallback = useCallback(setFilterValue, [setFilterValue]);
    const setFilterCallback = useCallback(setFilter, [setFilter]);
    const setSortCallback = useCallback(setSort, [setSort]);

    return (
        <>
            <h1>Search Character</h1>
            <SearchInput value={filterValue} onChange={setFilterValueCallback} />
            <SelectFilter value={filter} onChange={setFilterCallback} />
            <SelectSort sortingOption={sort} onChange={setSortCallback} />
            <CountryList countries={sortedCountries} />
        </>
    );
};
