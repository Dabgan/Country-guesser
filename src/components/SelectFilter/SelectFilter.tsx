import { FILTER_OPTIONS } from '../../constants';
import type { FilterType } from '../../types/search';
import './selectFilter.css';

type SelectFilter = {
    value: FilterType;
    onChange: React.Dispatch<React.SetStateAction<FilterType>>;
};

export const SelectFilter: React.FC<SelectFilter> = ({ value, onChange }) => {
    return (
        <label htmlFor="select-filter" className="select-filter-label">
            Search by
            <select value={value} onChange={e => onChange(e.target.value as FilterType)} className="select-filter">
                <option value={FILTER_OPTIONS.NAME}>Name</option>
                <option value={FILTER_OPTIONS.CAPITAL}>Capital</option>
                <option value={FILTER_OPTIONS.LANGUAGE}>Languages</option>
                <option value={FILTER_OPTIONS.CURRENCY}>Currency</option>
            </select>
        </label>
    );
};
