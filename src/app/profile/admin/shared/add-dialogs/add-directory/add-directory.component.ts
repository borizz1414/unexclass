import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-directory',
  templateUrl: './add-directory.component.html',
  styleUrls: ['../add-live/add-live.component.scss']
})
export class AddDirectoryComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<AddDirectoryComponent>,
    @Inject(MAT_DIALOG_DATA) public title) { }

  ngOnInit(): void {
    
  }
  close(){
const dialogRef = this.dialogRef.close()
  }

}