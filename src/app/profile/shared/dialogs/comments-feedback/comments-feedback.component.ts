import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-comments-feedback',
  templateUrl: './comments-feedback.component.html',
  styleUrls: ['./comments-feedback.component.scss']
})
export class CommentsFeedbackComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CommentsFeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) public action) { }

  ngOnInit(): void {
    
  }
  close(){
const dialogRef = this.dialogRef.close()
  }

}