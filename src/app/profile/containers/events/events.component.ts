import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventDialogComponent } from 'src/app/events/components/event-dialog/event-dialog.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  open_form = false;
  title_form= "";
  invitado = true;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openForm(action){
    this.open_form = !this.open_form;
    this.title_form = action;
  }
  getEvent(type){
    this.title_form = type;
    type==="event_footer" ? this.dialog.open(EventDialogComponent, {width: '440px'})  : this.open_form = !this.open_form;

  }

}
