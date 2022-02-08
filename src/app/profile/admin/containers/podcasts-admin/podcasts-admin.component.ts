import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPodcastsComponent } from '../../shared/add-dialogs/add-podcasts/add-podcasts.component';

@Component({
  selector: 'app-podcasts-admin',
  templateUrl: './podcasts-admin.component.html',
  styleUrls: ['./podcasts-admin.component.scss']
})
export class PodcastsAdminComponent implements OnInit {
  page ="Podcasts"
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  getEvent(action) {
    const dialogRef = this.dialog.open(AddPodcastsComponent, {width: '500px', data: action});
  
  }

}