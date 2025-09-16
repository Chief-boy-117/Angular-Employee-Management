import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnChanges {
  @Input() alertType: string = "";
  @Input() alertMessage: string = "";
  alertHeader: string = "";
  alertClass: string = "";

  msgMap: any = {
    success: { msg: 'Success', class: 'alert-success' },
    error: { msg: 'Error', class: 'alert-danger' },
    info: { msg: 'Info', class: 'alert-info' },
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['alertType']) {
      const alert = this.msgMap[this.alertType];
      if (alert) {
        this.alertHeader = alert.msg;
        this.alertClass = alert.class;
      } else {
        this.alertHeader = 'Unknown alert type';
        this.alertClass = 'alert-info';
      }
    }
  }
}
