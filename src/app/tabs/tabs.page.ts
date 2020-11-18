import { Component } from '@angular/core';

import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  tab1Page = Tab1Page;
  tab2Page = Tab2Page;
  tab3Page = Tab3Page;
  constructor() { }

}
