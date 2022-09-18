import { Component, OnInit } from '@angular/core';
import { Person } from '../intefaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {
  new: Person = {
    name: 'asdf',
    skill: 123,
  };

  // get people(): Person[] {
  //   return this.dbzService.people;
  // }

  // addNewPerson(person: Person) {
  //   this.people.push(person);
  // }

  constructor(/* private dbzService: DbzService */) {}

  ngOnInit(): void {}
}
