import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../intefaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
  // @Input() people: Person[] = []

  @Input() new: Person = {
    name: 'sadf',
    skill: 123,
  };

  // @Output() onNewPerson: EventEmitter<Person> = new EventEmitter();
  ngOnInit(): void {}

  constructor(private dbzService: DbzService) {}


  add() {
    if (this.new.name.trim().length === 0) return;

    this.dbzService.addPeople(this.new);
    this.new = { name: ' ', skill: 0 };
  }
}
