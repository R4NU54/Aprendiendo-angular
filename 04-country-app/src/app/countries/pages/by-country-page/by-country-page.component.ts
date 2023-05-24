import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent {
  placeholder: string = 'Buscar por pais';

  private countriesService = inject(CountriesService);

  public countries: Country[] = [];

  searchByCountry(term: string): void {
    this.countriesService.searchCountry(term).subscribe(countries => (this.countries = countries));
  }
}
