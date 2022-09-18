import { Injectable } from '@angular/core';
import { Person } from '../intefaces/dbz.interface';

@Injectable()
export class DbzService {
  private _people: Person[] = [
    { name: 'Ironman', skill: 100 },
    { name: 'krilii', skill: 10 },
  ];

  get people(): Person[] {
    return [...this._people];
  }

  constructor() {}

  addPeople(person: Person) {
    this._people.push(person);
  }
}
