import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, switchMap, tap } from 'rxjs';

import { Region, SmallCountry, Country } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [],
})
export class SelectorPageComponent implements OnInit {
  public countriesByRegion: SmallCountry[] = [];
  public bordersByCountry: SmallCountry[] = [];

  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.onRegionsChanged();
    this.onCountryChanged();
  }

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  private onRegionsChanged(): void {
    this.myForm
      .get('region')!
      .valueChanges.pipe(
        tap(() => this.myForm.get('country')!.setValue('')),
        switchMap(region => this.countriesService.getCountriesByRegion(region))
      )
      .subscribe(countries => {
        this.countriesByRegion = countries;
      });
  }
  private onCountryChanged(): void {
    this.myForm
      .get('country')!
      .valueChanges.pipe(
        tap(() => this.myForm.get('border')!.setValue('')),
        filter((value: string) => value.length > 0),
        switchMap(code => this.countriesService.getCountryByCode(code)),
        switchMap(country => this.countriesService.getCountriesBordersByCode(country.borders))
      )
      .subscribe(countries => {
        this.bordersByCountry = countries;
      });
  }
}
