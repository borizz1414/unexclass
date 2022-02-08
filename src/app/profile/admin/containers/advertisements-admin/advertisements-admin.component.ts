import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAdComponent } from '../../shared/add-dialogs/add-ad/add-ad.component';

@Component({
  selector: 'app-advertisements-admin',
  templateUrl: './advertisements-admin.component.html',
  styleUrls: ['./advertisements-admin.component.scss']
})
export class AdvertisementsAdminComponent implements OnInit {
  page ="Anuncios"
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  getEvent(action) {
    const dialogRef = this.dialog.open(AddAdComponent, {width: '500px', data: action});
  
  }

}
