import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { CountriesService } from './countries.service';
import { Country } from './country';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  countries : MatTableDataSource<Country> = new MatTableDataSource();
  columnsToDisplay = ['country', 'activeCases', 'activeCasesPct', 'newCases', 'newCasesPerMil', 'newDeaths', 'newDeathsPerMil', 'population'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private countriesService: CountriesService) { }
  
  ngOnInit() {
    this.countriesService.getCountries().subscribe(countries => { 
      this.countries.data = countries; 
    });
  }

  ngAfterViewInit(): void {
    this.countries.sort = this.sort;
  }
}


