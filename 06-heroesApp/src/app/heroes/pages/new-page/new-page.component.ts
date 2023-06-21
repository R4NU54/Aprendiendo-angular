import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { filter, switchMap, tap } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'hero-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent implements OnInit {
  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    alt_img: new FormControl<string>(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC Comics' },
    { id: 'Marvel Comics', desc: 'Marvel Comics' },
  ];

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    } else {
      this.activatedRoute.params
        .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
        .subscribe(hero => {
          if (!hero) {
            return this.router.navigate(['/heroes/new']);
          } else {
            return this.heroForm.patchValue(hero);
          }
        });
    }
  }

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  public onSubmit(): void {
    if (this.heroForm.invalid) {
      return;
    }
    if (this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero).subscribe(hero => {
        this.showSnackBar(`Heroe ${hero.superhero} actualizado.`);
      });
      return;
    }
    this.heroesService.addHero(this.currentHero).subscribe(hero => {
      this.showSnackBar(`Heroe ${hero.superhero} creado.`);
      this.router.navigate(['/heroes/edit', hero.id]);
    });
  }

  public showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', { duration: 2500 });
  }

  public onDelete(): void {
    if (!this.currentHero.id) {
      throw Error('No se puede eliminar un heroe sin id');
    }
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((result: boolean) => result),
        switchMap(() => this.heroesService.deleteHeroById(this.currentHero.id)),
        tap(wasDeleted => console.log({ wasDeleted }))
      )
      .subscribe(() => {
        this.showSnackBar(`Heroe ${this.currentHero.superhero} eliminado.`);
        this.router.navigate(['/heroes']);
      });
  }
}
