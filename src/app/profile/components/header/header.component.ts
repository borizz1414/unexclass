import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-profile',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderProfileComponent implements OnInit {
  @Input() name_user;
  @Input() avatar;
  constructor() { }

  ngOnInit(): void {
  }

}
