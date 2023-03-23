import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-component',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
