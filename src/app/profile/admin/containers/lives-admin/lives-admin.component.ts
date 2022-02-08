import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddLiveComponent } from '../../shared/add-dialogs/add-live/add-live.component';

@Component({
  selector: 'app-lives-admin',
  templateUrl: './lives-admin.component.html',
  styleUrls: ['./lives-admin.component.scss']
})
export class LivesAdminComponent implements OnInit {
  page ="En vivos"
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  getEvent(action) {
    const dialogRef = this.dialog.open(AddLiveComponent, {width: '500px', data: action});
  
  }

}