import { Component } from '@angular/core';

@Component({
  selector: 'app-count',
  template: `
    <p>{{ titled }}</p>
    <p>{{ 4 + 5 }}</p>

    <button (click)="acumulate(base)">+{{ base }}</button>
    <button (click)="acumulate(-base)">-{{ base }}</button>
    <p>{{ numero }}</p>
  `,
})
export class CountComponent {
  titled = 'Counter App';
  numero = 10;
  base = 5;

  acumulate(n: number) {
    this.numero = this.numero + n;
  }
}
