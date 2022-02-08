import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditAccountComponent } from '../../shared/add-dialogs/edit-account/edit-account.component';

@Component({
  selector: 'app-accounts-admin',
  templateUrl: './accounts-admin.component.html',
  styleUrls: ['./accounts-admin.component.scss']
})
export class AccountsAdminComponent implements OnInit {
  page ="Cuentas"
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  getEvent(action) {
    const dialogRef = this.dialog.open(EditAccountComponent, {width: '500px', data: action});
  
  }

}
