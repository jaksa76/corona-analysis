import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    let filename = new Date().toISOString().slice(0, 10) + ".json";
    return this.http.get(`assets/data/${filename}`)
      .pipe(map((data: any) => {
        console.log(data);
        return data.data.map(countryData => new Country(countryData));
      }));
  }
}
