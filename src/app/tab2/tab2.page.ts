import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { RecordsService } from '../services/records.service';
import { Record } from '../services/records.model';
import { DayProgressService } from '../services/day-progress.service';
import { DayProgress } from '../services/day-progress.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {



  isLoading = false;
  loadedrecords: Record[];
  private recordsSub: Subscription;

  loadedDayProgress: DayProgress;
  private dayProgressSub: Subscription;


  constructor(
    private recordsService: RecordsService,
    private dayProgressService: DayProgressService,
    public alertController: AlertController) { }

  ngOnInit() {
    this.recordsSub = this.recordsService.records.subscribe(records => {
      this.loadedrecords = records;
    });
    this.dayProgressSub = this.dayProgressService.dayProgress.subscribe(dayProgress => {
      this.loadedDayProgress = dayProgress;
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.recordsService.fetch().subscribe(() => {
      this.isLoading = false;
    });
    this.dayProgressService.fetch().subscribe();
  }




  addRecord(newRecord) {

    this.isLoading = true;
    this.recordsService.add(newRecord).subscribe(() => {
      this.dayProgressService.add(newRecord.size).subscribe(() => {
        this.isLoading = false;
      });
    });
  }


  async removeRecordDialog(chosenRecord) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Deleteing ' + chosenRecord.size + 'ml!',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'I changed my mide',
          role: 'cancel',
          cssClass: 'light',
          handler: (blah) => {
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.removeRecord(chosenRecord);
          }
        }
      ]
    });

    await alert.present();
  }

  removeRecord(chosenRecord) {

    const removedSize = chosenRecord.size;
    this.isLoading = true;
    this.recordsService.remove(chosenRecord).subscribe(() => {
      this.dayProgressService.remove(removedSize).subscribe(() => {
        this.isLoading = false;
      });
    });
  }

  ngOnDestroy() {
    if (this.recordsSub) {
      this.recordsSub.unsubscribe();
    }
    if (this.dayProgressSub) {
      this.dayProgressSub.unsubscribe();
    }
  }
}
