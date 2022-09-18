import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PeopleComponent } from './people/people.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { DbzService } from './services/dbz.services';

@NgModule({
  declarations: [MainPageComponent, PeopleComponent, AddPersonComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
  providers: [DbzService],
})
export class DbzModule {}
