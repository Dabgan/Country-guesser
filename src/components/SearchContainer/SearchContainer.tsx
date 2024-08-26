import { useState, useCallback } from 'react';
import { SearchInput } from '../SearchInput/SearchInput';
import { CountryList } from '../CountryList/CountryList';
import { SelectFilter } from '../SelectFilter/SelectFilter';
import { SelectSort } from '../SelectSort/SelectSort';
import './searchContainer.css';

import { useSortedCountries } from '../../hooks/useSortedCountries';

export const SearchContainer = () => {
    const [filter, setFilter] = useState('name');
    const [filterValue, setFilterValue] = useState('');
    const [sort, setSort] = useState('');

    const sortedCountries = useSortedCountries(filter, filterValue, sort);

    const setFilterValueCallback = useCallback(setFilterValue, [setFilterValue]);
    const setFilterCallback = useCallback(setFilter, [setFilter]);
    const setSortCallback = useCallback(setSort, [setSort]);

    return (
        <>
            <h2 className="main-title">Search Country</h2>
            <div className="search-container">
                <SelectFilter value={filter} onChange={setFilterCallback} />
                <SelectSort sortingOption={sort} onChange={setSortCallback} />
            </div>
            <SearchInput value={filterValue} onChange={setFilterValueCallback} />
            <CountryList countries={sortedCountries} />
        </>
    );
};
