import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-classified',
  templateUrl: './add-classified.component.html',
  styleUrls: ['./add-classified.component.scss']
})
export class AddClassifiedComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddClassifiedComponent>,
    @Inject(MAT_DIALOG_DATA) public title) { }

  ngOnInit(): void {
    
  }
  close(){
const dialogRef = this.dialogRef.close()
  }

}