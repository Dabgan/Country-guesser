import { useState } from 'react';
import { SearchContainer } from './components/SearchContainer/SearchContainer';
import { GuessContainer } from './components/GuessContainer/GuessContainer';
import { RadioInput } from './components/RadioInput';
import { GameMode } from './constants';
import { type GameModeType } from './types/base';

function App() {
    const [mode, setMode] = useState<GameModeType>(GameMode.SEARCH);

    return (
        <div className="wrapper">
            <h1>Choose mode:</h1>
            <div className="game-mode">
                <RadioInput value={GameMode.SEARCH} onChange={setMode} checked={mode === GameMode.SEARCH} />
                <RadioInput value={GameMode.GUESS} onChange={setMode} checked={mode === GameMode.GUESS} />
            </div>
            {mode === GameMode.SEARCH ? <SearchContainer /> : <GuessContainer />}
        </div>
    );
}

export default App;
