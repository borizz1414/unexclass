import { Component, OnInit } from '@angular/core';
import { navigationClassified, navigationDashboard, navigationSocialWork } from 'src/app/shared/navigations/navigation';

@Component({
  selector: 'app-social-work',
  templateUrl: './social-work.container.html',
  styleUrls: ['./social-work.container.scss']
})
export class SocialWorkContainer implements OnInit {
  showFiller = true;
  navigation = navigationDashboard;
  navigationClassified = navigationClassified;
  navigationSocialWork = navigationSocialWork;
  constructor() { }

  ngOnInit(): void {
  }

}
