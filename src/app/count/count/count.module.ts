import { NgModule } from "@angular/core";
import { CountComponent } from "./count.component";

@NgModule({
  declarations: [CountComponent],
  exports: [CountComponent],
})
export class CountModule {}