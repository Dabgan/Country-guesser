type SearchInputProps = {
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
    return (
        <label htmlFor="search-input">
            Search:
            <input type="text" value={value} onChange={e => onChange(e.target.value)} id="search-input" />
        </label>
    );
};
