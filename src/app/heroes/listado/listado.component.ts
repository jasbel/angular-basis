import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  heroes: string[] = ['Ironman', 'Capitan America', 'Hulk', 'Thor'];
  heroesRemoves: string[] = [];

  constructor() {
    console.log('ListadoComponent constructor');
  }

  ngOnInit(): void {
    console.log('ListadoComponent ngOnInit');
  }

  removeHero(): void {
    const heroRemove = this.heroes.shift();

    if(heroRemove) this.heroesRemoves.push(heroRemove);
  }
}
