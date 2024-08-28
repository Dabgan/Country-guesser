import { SORTING_OPTIONS } from '../../constants';
import type { SortingOption } from '../../types/search';
import './selectSort.css';

type SelectSortProps = {
    sortingOption: SortingOption;
    onChange: React.Dispatch<React.SetStateAction<SortingOption>>;
};

export const SelectSort: React.FC<SelectSortProps> = ({ sortingOption, onChange }) => {
    return (
        <select value={sortingOption} onChange={e => onChange(e.target.value as SortingOption)} className="select-sort">
            <option value="" disabled hidden>
                Sorty by...
            </option>
            <option value={SORTING_OPTIONS.ASC}>Alphabetical ascending</option>
            <option value={SORTING_OPTIONS.DESC}>Alphabetical desceinding</option>
            <option value={SORTING_OPTIONS.POPULATION_ASC}>Population ascending</option>
            <option value={SORTING_OPTIONS.POPULATION_DESC}>Population desceinding</option>
        </select>
    );
};
