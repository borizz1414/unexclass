import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClassifiedComponent } from '../../shared/add-dialogs/add-classified/add-classified.component';

@Component({
  selector: 'app-classifieds-admin',
  templateUrl: './classifieds-admin.component.html',
  styleUrls: ['./classifieds-admin.component.scss']
})
export class ClassifiedsAdminComponent implements OnInit {
  page ="Clasificados"
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  getEvent(action) {
    const dialogRef = this.dialog.open(AddClassifiedComponent, {width: '500px', data: action});
  
  }

}
