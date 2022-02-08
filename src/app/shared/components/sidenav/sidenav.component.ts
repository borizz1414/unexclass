import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() navigation;
  panelOpenState = false;
  constructor() {}

  ngOnInit(): void {
    console.log(this.navigation)

  }
}
