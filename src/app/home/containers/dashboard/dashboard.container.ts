import { Component, OnInit } from '@angular/core';
import { navigationClassified, navigationDashboard, navigationSocialWork } from "../../../shared/navigations/navigation";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.container.html',
  styleUrls: ['./dashboard.container.scss'],
})
export class DashboardContainer implements OnInit {
  showFiller = true;
  navigation = navigationDashboard;
  navigationClassified = navigationClassified;
  navigationSocialWork = navigationSocialWork;
  constructor() {}

  ngOnInit(): void {
  }
}
