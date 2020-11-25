import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Record } from 'src/app/services/records.model';


@Component({
  selector: 'app-add-options',
  templateUrl: './add-options.component.html',
  styleUrls: [
      './add-options.component.scss',
    //   '../../../assets/css/vivify.min.css'
    ],
})
export class AddOptionsComponent implements OnInit {

  @Output() addRecordEvent: EventEmitter<Record> = new EventEmitter<Record>();


  isShowOptionsON = false;

  constructor(private eRef: ElementRef) { }

  ngOnInit() { }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
    } else {
      this.hide();
    }
  }


  addRecord(size, imageNumber) {
    const newRecord = new Record(null, 'cup-0' + imageNumber + '.svg', size, new Date());
    this.addRecordEvent.emit(newRecord);
  }

  show() {
    this.isShowOptionsON = true;
  }

  hide() {
    this.isShowOptionsON = false;
  }

}
