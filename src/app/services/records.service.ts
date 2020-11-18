import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Record } from './records.model';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';


interface RecordInterface {
  image: string;
  size: number;
  time: Date;
}

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  private _records = new BehaviorSubject<Record[]>([]);

  get records() {
    return this._records.asObservable();

  }

  constructor() {

  }


  add(newRecord: Record) {
    return this._records.pipe(
      take(1),
      tap(records => {
        records.push(newRecord);
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
}
