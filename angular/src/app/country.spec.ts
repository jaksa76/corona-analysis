import { Country } from './country';

describe('Country', () => {
  it('should create an instance', () => {
    expect(new Country()).toBeTruthy();
  });

  it('should map all properties', () => {
    let country = new Country({
      country: "Montenegro",
      population: 500000,
      activeCases: 30000,
      newCases: 1000,
      newDeaths: 10      
    });
    expect(country.country).toBe("Montenegro");
    expect(country.population).toBe(500000);
    expect(country.activeCases).toBe(30000);
    expect(country.newCases).toBe(1000);
    expect(country.newDeaths).toBe(10);
  });

  it('should map all properties even if strings are used', () => {
    let country = new Country({
      country: "Montenegro",
      population: "500000",
      activeCases: "30000",
      newCases: "1000",
      newDeaths: "10"      
    });
    expect(country.country).toBe("Montenegro");
    expect(country.population).toBe(500000);
    expect(country.activeCases).toBe(30000);
    expect(country.newCases).toBe(1000);
    expect(country.newDeaths).toBe(10);
  });

  it('should calculate the percent of active cases', () => {
    let country = new Country({
      population: 1000000,
      activeCases: 30000
    });
    expect(country.activeCasesPct).toBeCloseTo(0.03);
  });

  it('should calculate the new cases per millino people', () => {
    let country = new Country({
      population: 2000000,
      newCases: 40
    });
    expect(country.newCasesPerMil).toBe(20);
  });
  
  it('should calculate the new deaths per millino people', () => {
    let country = new Country({
      population: 2000000,
      newDeaths: 20
    });
    expect(country.newDeathsPerMil).toBe(10);
  });

  it('should calculate the new deaths per millino people even if strings are used', () => {
    let country = new Country({
      population: "2000000",
      newDeaths: "20"
    });
    expect(country.newDeathsPerMil).toBe(10);
  });

});
