import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountries() {
      return this.http.get("assets/data/2020-11-11.json")
      .pipe(map((data: any) => {
        console.log(data);
        return data.data;
      }));
  }
}
