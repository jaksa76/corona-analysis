export class Country {
    country: string;
    activeCases: number;
    newCases: number;
    newDeaths: number;
    population: number;

    activeCasesPct(): number {
        return this.activeCases / this.population;
    }
}
