import { useState } from 'react';
import { SearchContainer } from './components/SearchContainer/SearchContainer';
import { GuessContainer } from './components/GuessContainer/GuessContainer';

function App() {
    const [mode, setMode] = useState('search');

    return (
        <div className="wrapper">
            <h1>Choose mode:</h1>
            <div className="game-mode">
                <label className="game-mode-label">
                    Search
                    <input type="radio" value="search" checked={mode === 'search'} onChange={() => setMode('search')} />
                </label>
                <label className="game-mode-label">
                    Guess
                    <input type="radio" value="guess" checked={mode === 'guess'} onChange={() => setMode('guess')} />
                </label>
            </div>
            {mode === 'search' ? <SearchContainer /> : <GuessContainer />}
        </div>
    );
}

export default App;
