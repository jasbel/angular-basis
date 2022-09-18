import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../intefaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  // @Input('dtPeople') people: Person[] = []
  get people() {
    return this.dbzService.people
  }

  constructor( private dbzService: DbzService ) {
    // this.dbzService
  }

  ngOnInit(): void {
  }

}
