export class Country {
    country?: string;
    activeCases?: number;
    newCases?: number;
    newDeaths?: number;
    population?: number;

    constructor(data?: any) {
        if (data) {
            this.country = data.country;
            this.activeCases = parseInt(data.activeCases);
            this.population = parseInt(data.population);
        }
    }

    activeCasesPct(): number {
        return this.activeCases / this.population;
    }
}
