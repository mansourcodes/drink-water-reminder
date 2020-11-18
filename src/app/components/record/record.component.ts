import { Component, Input, OnInit } from '@angular/core';
import { Record } from '../../services/records.model';
@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent implements OnInit {
  @Input() record: Record;
  constructor() { }

  ngOnInit() { }

}
