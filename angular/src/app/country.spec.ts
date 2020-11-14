import { Country } from './country';

describe('Country', () => {
  it('should create an instance', () => {
    expect(new Country()).toBeTruthy();
  });

  it('should calculate the percent of active cases', () => {
    let country = new Country({
      population: 1000000,
      activeCases: 30000
    });
    expect(country.activeCasesPct).toBeCloseTo(0.03);
  });
});
