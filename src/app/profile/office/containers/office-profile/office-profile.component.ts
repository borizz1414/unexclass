import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompleteProfileComponent } from '../../components/complete-profile/complete-profile.component';

@Component({
  selector: 'app-office-profile',
  templateUrl: './office-profile.component.html',
  styleUrls: ['./office-profile.component.scss'],
})
export class OfficeProfileComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  editProfile() {
    const dialogRef = this.dialog.open(CompleteProfileComponent, {
      maxWidth: '520px',
      data: 'Completar',
      maxHeight: '90vh',
    });
  }
}
