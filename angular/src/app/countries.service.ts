import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountries() : Observable<Country[]> {
      return this.http.get("assets/data/2020-11-15.json")
      .pipe(map((data: any) => {
        console.log(data);
        return data.data.map(countryData => new Country(countryData));
      }));
  }
}
