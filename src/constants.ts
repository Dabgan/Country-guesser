export const GameMode = {
    SEARCH: 'search',
    GUESS: 'guess',
} as const;

export const FILTER_OPTIONS = {
    NAME: 'name',
    LANGUAGE: 'language',
    CURRENCY: 'currency',
    CAPITAL: 'capital',
} as const;

export const SORTING_OPTIONS = {
    ASC: 'asc',
    DESC: 'desc',
    POPULATION_ASC: 'population-asc',
    POPULATION_DESC: 'population-desc',
} as const;
