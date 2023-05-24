import { Component, inject } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  private CountriesService = inject(CountriesService);

  public countries: Country[] = [];

  searchByRegion(region: string) {
    this.CountriesService.searchRegion(region).subscribe(countries => (this.countries = countries));
  }
}
