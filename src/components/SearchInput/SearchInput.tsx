import './searchInput.css';

type SearchInputProps = {
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={e => onChange(e.target.value)}
            id="search-input"
            className="search-input"
        />
    );
};
