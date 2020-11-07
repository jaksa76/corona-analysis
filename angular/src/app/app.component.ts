import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { CountriesService } from './countries.service';
import { Country } from './country';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries : Country[];
  columnsToDisplay = ['country', 'activeCases', 'newCases', 'newDeaths', 'population'];

  constructor(private countriesService: CountriesService) {
    // this.countries = new CountriesDataSource(countriesService);
  }

  ngOnInit() {
    this.countriesService.getCountries().subscribe((data: Country[]) => {
      this.countries = data;
    })
  }
}


export class CountriesDataSource extends DataSource<Country> {

  constructor(private countriesService: CountriesService) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Country[]> {
    return this.countriesService.getCountries();
  }

  disconnect() {}
}


