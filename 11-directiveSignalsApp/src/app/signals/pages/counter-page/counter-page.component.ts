import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent {
  counter = signal(10);
  squareCounter = computed(() => Math.pow(this.counter(), 2));

  updateCounter(value: number) {
    this.counter.update(current => current + value);
  }
}
