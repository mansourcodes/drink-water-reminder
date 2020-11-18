import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RecordModule } from '../components/record/record.module';
import { DayprogresModule } from '../components/dayprogres/dayprogres.module';
import { AddOptionsComponent } from '../components/add-options/add-options.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DayprogresModule,
    RecordModule,

  ],
  declarations: [Tab2Page, AddOptionsComponent],
  exports: [AddOptionsComponent],
  entryComponents: [
    Tab2Page,
  ],
})
export class Tab2PageModule { }
