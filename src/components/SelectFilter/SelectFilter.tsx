import { FilterType } from '../../types/search';
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
                <option value={'name'}>Name</option>
                <option value={'capital'}>Capital</option>
                <option value={'lang'}>Languages</option>
                <option value={'currency'}>Currency</option>
            </select>
        </label>
    );
};
