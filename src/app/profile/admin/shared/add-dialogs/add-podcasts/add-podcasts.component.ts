import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-podcasts',
  templateUrl: './add-podcasts.component.html',
  styleUrls: ['../add-live/add-live.component.scss']
})
export class AddPodcastsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddPodcastsComponent>,
    @Inject(MAT_DIALOG_DATA) public title) { }

  ngOnInit(): void {
    
  }
  close(){
const dialogRef = this.dialogRef.close()
  }

}