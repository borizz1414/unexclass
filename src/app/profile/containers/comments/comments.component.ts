import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentsFeedbackComponent } from '../../shared/dialogs/comments-feedback/comments-feedback.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  invitado = true;
  ngOnInit(): void {}

  eventComment(action) {

      this.dialog.open(CommentsFeedbackComponent, {
        width: '400px',
        data: action,
      });


  }
}
