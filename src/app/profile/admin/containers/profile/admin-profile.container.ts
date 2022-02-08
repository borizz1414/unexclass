import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompleteProfileComponent } from 'src/app/profile/office/components/complete-profile/complete-profile.component';


@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.container.html',
  styleUrls: ['./admin-profile.container.scss']
})
export class AdminProfileContainer implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  editProfile() {
    const dialogRef = this.dialog.open(CompleteProfileComponent, {width: '520px', data:'Editar'});
  
  }

}
