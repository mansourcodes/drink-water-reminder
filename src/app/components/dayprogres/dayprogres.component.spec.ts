import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DayprogresComponent } from './dayprogres.component';

describe('DayprogresComponent', () => {
  let component: DayprogresComponent;
  let fixture: ComponentFixture<DayprogresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayprogresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DayprogresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
