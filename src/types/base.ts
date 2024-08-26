import { GameMode } from '../constants';

export type GameModeType = (typeof GameMode)[keyof typeof GameMode];
