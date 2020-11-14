export class Country {
    country?: string;
    activeCases?: number;
    newCases?: number;
    newDeaths?: number;
    population?: number;
    activeCasesPct?: number;
    newCasesPerMil?: number;
    newDeathsPerMil?: number;

    constructor(data?: any) {
        if (data) {
            this.country = data.country;
            this.activeCases = parseInt(data.activeCases);
            this.population = parseInt(data.population);            
            if (!isNaN(this.activeCases) && !isNaN(this.population)) this.activeCasesPct = this.activeCases / this.population;

            this.newCases = data.newCases;
            if (!isNaN(this.newCases) && !isNaN(this.population)) this.newCasesPerMil = 1000000 * this.newCases / this.population;

            this.newDeaths = data.newDeaths;
            if (!isNaN(this.newDeaths) && !isNaN(this.population)) this.newDeathsPerMil = 1000000 * this.newDeaths / this.population;
        }
    }
}
