import { Component, Inject, OnInit } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-live',
  templateUrl: './add-live.component.html',
  styleUrls: ['./add-live.component.scss']
})
export class AddLiveComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<AddLiveComponent>,
    @Inject(MAT_DIALOG_DATA) public title) { }

  ngOnInit(): void {
    
  }
  close(){
const dialogRef = this.dialogRef.close()
  }

}