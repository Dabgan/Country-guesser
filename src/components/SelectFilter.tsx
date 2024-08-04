type SelectFilter = {
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
};

export const SelectFilter: React.FC<SelectFilter> = ({ value, onChange }) => {
    return (
        <select value={value} onChange={e => onChange(e.target.value)} className="select-filter">
            <option value={'name'}>Name</option>
            <option value={'capital'}>Capital</option>
            <option value={'lang'}>Languages</option>
            <option value={'currency'}>Currency</option>
        </select>
    );
};
