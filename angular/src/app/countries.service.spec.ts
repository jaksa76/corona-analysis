import { TestBed } from '@angular/core/testing';
import { Observable, of, scheduled } from 'rxjs';
import { CountriesService } from './countries.service';
import { Country } from './country';


describe('CountriesService', () => {
  let service: CountriesService;
  let httpClientMock: any = {};

  beforeEach(() => {
    service = new CountriesService(httpClientMock as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an array of Country classes', () => {
    httpClientMock.get = function() {
      return of({ data: [
        { "country": "Montenegro", population: "500000" },
        { "country": "Tajikistan", population: "9000000" },
      ] });
    }

    service.getCountries().subscribe(countries => {
      expect(countries[0].country).toBe("Montenegro");
      expect(countries[0].population).toBe(500000);
      expect(countries[1].country).toBe("Tajikistan");
      expect(countries[1].population).toBe(9000000);
    })
  });
});
