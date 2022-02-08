import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDirectoryComponent } from '../../shared/add-dialogs/add-directory/add-directory.component';

@Component({
  selector: 'app-directory-admin',
  templateUrl: './directory-admin.component.html',
  styleUrls: ['./directory-admin.component.scss']
})
export class DirectoryAdminComponent implements OnInit {
  page ="Directorios"
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  getEvent(action) {
    const dialogRef = this.dialog.open(AddDirectoryComponent, {width: '500px', data: action});
  
  }

}
