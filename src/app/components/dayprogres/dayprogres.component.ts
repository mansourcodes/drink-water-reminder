import { Component, Input, OnInit } from '@angular/core';
import { DayProgress } from 'src/app/services/day-progress.model';

@Component({
  selector: 'app-dayprogres',
  templateUrl: './dayprogres.component.html',
  styleUrls: ['./dayprogres.component.scss'],
})
export class DayprogresComponent implements OnInit {

  @Input() dayProgres: DayProgress;
  constructor() { }

  ngOnInit() { }

}
