export type Country = {
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    capital: string[];
    languages: {
        [key: string]: string;
    };
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    population: number;
};
