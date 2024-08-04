import './selectSort.css';

type SelectSortProps = {
    sortingOption: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
};

export const SelectSort: React.FC<SelectSortProps> = ({ sortingOption, onChange }) => {
    return (
        <select value={sortingOption} onChange={e => onChange(e.target.value)} className="select-sort">
            <option value="" disabled hidden>
                Sorty by...
            </option>
            <option value="asc">Alphabetical ascending</option>
            <option value="desc">Alphabetical desceinding</option>
            <option value="population-asc">Population ascending</option>
            <option value="population-desc">Population desceinding</option>
        </select>
    );
};
