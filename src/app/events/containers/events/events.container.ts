import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { navigationEvents } from 'src/app/shared/navigations/navigation';
import { EventDialogComponent } from '../../components/event-dialog/event-dialog.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.container.html',
  styleUrls: ['./events.container.scss']
})
export class EventsContainer implements OnInit {
navigation = navigationEvents
constructor(public dialog: MatDialog) { }

ngOnInit(): void {
}
getEvent(action) {
  const dialogRef = this.dialog.open(EventDialogComponent, {width: '440px', data: action});

}

}
