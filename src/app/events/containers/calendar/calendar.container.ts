import { Component, OnInit } from '@angular/core';
import { navigationEvents } from 'src/app/shared/navigations/navigation';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.container.html',
  styleUrls: ['./calendar.container.scss']
})
export class CalendarContainer implements OnInit {
  navigation = navigationEvents
  constructor() { }

  ngOnInit(): void {
  }

}
