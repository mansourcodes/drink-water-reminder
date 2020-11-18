import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { take } from 'rxjs/internal/operators/take';
import { tap } from 'rxjs/internal/operators/tap';
import { Subject } from 'rxjs/internal/Subject';
import { DayProgress } from './day-progress.model';

@Injectable({
  providedIn: 'root'
})
export class DayProgressService {
  private _dayProgress = new BehaviorSubject<DayProgress>(null);


  get dayProgress() {
    return this._dayProgress.asObservable();

  }

  constructor() {
    const initDayProgress = new DayProgress(
      2000,
      0
    );
    this._dayProgress.next(initDayProgress);
  }


  add(newProgress: number) {

    return this._dayProgress.pipe(
      take(1),
      tap(dayProgress => {
        const newDayProgress = new DayProgress(
          dayProgress.total,
          newProgress + dayProgress.progress
        );
        dayProgress = newDayProgress;
        this._dayProgress.next(dayProgress);
      })
    );

  }

  remove(removedProgress: number) {

    return this._dayProgress.pipe(
      take(1),
      tap(dayProgress => {
        const newDayProgress = new DayProgress(
          dayProgress.total,
          dayProgress.progress - removedProgress
        );
        dayProgress = newDayProgress;
        this._dayProgress.next(dayProgress);
      })
    );

  }



  fetch() {
    return this._dayProgress.pipe(
      take(1),
      tap(dayProgress => {
        this._dayProgress.next(dayProgress);
      })
    );
  }
}
