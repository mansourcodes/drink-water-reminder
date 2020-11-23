import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Record } from './records.model';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import moment from 'moment'; 
import { empty } from 'rxjs';

interface RecordInterface {
  image: string;
  size: number;
  time: Date;
}

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  currentDate: string;
  private _records = new BehaviorSubject<Record[]>([]);

  get records() {
    return this._records.asObservable();

  }

  constructor(private storage: Storage) {

    var now = moment().set('month', 3).set('date', 1);
    this.currentDate = now.format('M_D_YYYY');
    console.log(this.currentDate);
    
    this.getLocalStorage().then(initRecords => {
        this._records.next(initRecords);
    });
        
  }


  add(newRecord: Record) {
    return this._records.pipe(
      take(1),
      tap(records => {
        if(records == null){
            records = [];
        }
        records.push(newRecord);
        this.setLocalStorage(records);
        this._records.next(records);
      })
    );

  }

  remove(chosenRecord) {

    return this._records.pipe(
      take(1),
      tap(records => {
        this._records.next(records.filter(b => b._id !== chosenRecord._id));
      })
    );

  }

  fetch() {
    return this._records.pipe(
      take(1),
      tap(records => {
        this._records.next(records);
      })
    );
  }





  setLocalStorage(newItem){
      this.storage.set('records_'+this.currentDate,newItem);
  }

  getLocalStorage(){
     return this.storage.get('records_'+this.currentDate);
  }
}
