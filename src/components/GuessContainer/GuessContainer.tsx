import { useEffect, useState } from 'react';
import { CountryCard } from '../CountryCard/CountryCard';
import { SearchInput } from '../SearchInput/SearchInput';
import { Country } from '../../types/apiTypes';
import { fetchRandomCountry } from '../../api/fetchRandomCountry';
import './guessContainer.css';

export const GuessContainer: React.FC = () => {
    const [randomCountry, setRandomCountry] = useState<Country | null>(null);
    const [search, setSearch] = useState('');
    const [isGuessed, setIsGuessed] = useState<boolean | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setIsGuessed(null);
        e.preventDefault();
        const userGuess = search.toLowerCase();
        const correctGuess = randomCountry?.name.common.toLowerCase() === userGuess;
        // react will re-render and shake animation will trigger
        setTimeout(() => setIsGuessed(correctGuess), 0);
    };

    const handleNextCountry = async () => {
        setSearch('');
        setIsGuessed(null);
        try {
            const newRandomCountry = await fetchRandomCountry();
            setRandomCountry(newRandomCountry);
        } catch (error) {
            console.error('Failed to fetch random country:', error);
        }
    };

    useEffect(() => {
        handleNextCountry();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="main-title">Guess Country</h2>
            <SearchInput value={search} onChange={setSearch} />
            <div className="button-container">
                <button type="submit">Check</button>
                <button type="button" onClick={handleNextCountry}>
                    Next Country
                </button>
            </div>
            {randomCountry && <CountryCard country={randomCountry} isGuessMode={true} />}
            {isGuessed !== null && (
                <p className={`guess-result guess-${isGuessed ? 'correct' : 'incorrect'}`}>
                    {isGuessed ? 'Correct!' : 'Incorrect!'}
                </p>
            )}
        </form>
    );
};
