import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { CountriesService } from './countries.service';
import { Country } from './country';

describe('AppComponent', () => {
  class MockCountriesService {
    getCountries() : Observable<Country[]> {
      return new Observable(subscriber => {
        subscriber.next(countries());
      });
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ HttpClient ],
      declarations: [ AppComponent ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the countries field', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    expect(app.countries.data.length).toBeGreaterThan(0);
  });

  it('should render table headers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('table').textContent).toContain('Country');
  });

  let countries : Country[] = [
    {"country":"World","totalCases":"51797147","newCases":"542492","totalDeaths":"1278539","newDeaths":"9191","totalRecovered":"36386083","newRecovered":"322836","activeCases":"14132525","serious":"94914","totPerMil":"6645","deathsPerMil":"164.0","totalTests":"","testsPerMil":"","population":""},{"country":"China","totalCases":"86267","newCases":"22","totalDeaths":"4634 ","newDeaths":"","totalRecovered":"81207","newRecovered":"20","activeCases":"426","serious":"6","totPerMil":"60","deathsPerMil":"3","totalTests":"160000000","testsPerMil":"111163","population":"1439323776 "}
  ]
});
