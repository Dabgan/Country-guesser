import React from 'react';
import { type GameModeType } from '../types/base';

type RadioInputProps = {
    value: GameModeType;
    onChange: React.Dispatch<React.SetStateAction<GameModeType>>;
    checked: boolean;
};

export const RadioInput: React.FC<RadioInputProps> = ({ value, onChange, checked }) => {
    return (
        <label className="game-mode-label">
            {value.toUpperCase()}
            <input
                type="radio"
                value={value}
                checked={checked}
                onChange={e => onChange(e.target.value as GameModeType)}
            />
        </label>
    );
};
