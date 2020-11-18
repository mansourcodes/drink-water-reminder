import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordComponent } from './record.component';



@NgModule({
  declarations: [RecordComponent],
  imports: [
    CommonModule
  ],
  exports: [RecordComponent]
})
export class RecordModule { }
