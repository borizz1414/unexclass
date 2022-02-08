import { Component, OnInit } from '@angular/core';
import { navigationClassified, navigationDashboard, navigationSocialWork } from 'src/app/shared/navigations/navigation';

@Component({
  selector: 'app-virtual-office',
  templateUrl: './virtual-office.container.html',
  styleUrls: ['./virtual-office.container.scss']
})
export class VirtualOfficeContainer implements OnInit {
  showFiller = true;
  navigation = navigationDashboard;
  navigationClassified = navigationClassified;
  navigationSocialWork = navigationSocialWork;
  constructor() { }

  ngOnInit(): void {
  }

}
