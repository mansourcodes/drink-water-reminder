import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayprogresComponent } from './dayprogres.component';



@NgModule({
  declarations: [DayprogresComponent],
  imports: [
    CommonModule
  ],
  exports: [DayprogresComponent]
})
export class DayprogresModule { }
