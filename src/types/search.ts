import { FILTER_OPTIONS, SORTING_OPTIONS } from '../constants';

export type FilterType = (typeof FILTER_OPTIONS)[keyof typeof FILTER_OPTIONS];

export type SortingOption = (typeof SORTING_OPTIONS)[keyof typeof SORTING_OPTIONS] | '';
