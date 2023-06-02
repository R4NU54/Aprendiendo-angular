import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';
import { Name } from '../../../../../../04-country-app/src/app/countries/interfaces/country.interface';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  // i18nSelect
  public name: string = 'Raúl';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Vanesa';
    this.gender = 'female';
  }

  // i8nPlural

  public clients: string[] = ['Elena', 'Alexa', 'Vanesa', 'Raúl', 'Ale', 'Luis', 'Marcelo'];
  public clientsMap = {
    '=0': 'no hay clientes esperando.',
    '=1': 'hay un cliente esperando.',
    '=2': 'hay dos clientes esperando.',
    other: 'hay # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Vanesa',
    age: '42',
    address: 'Benalmadena, España',
  };

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(tap(value => console.log(value)));

  public myPromiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
      this.person.name = 'Roberto';
    }, 3500);
  });
}
