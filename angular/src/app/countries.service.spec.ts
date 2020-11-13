import { TestBed } from '@angular/core/testing';
import { CountriesService } from './countries.service';


describe('CountriesService', () => {
  let service: CountriesService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    service = new CountriesService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
