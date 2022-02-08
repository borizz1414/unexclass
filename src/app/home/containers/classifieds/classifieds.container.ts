import { Component, OnInit } from '@angular/core';
import { navigationClassified, navigationDashboard, navigationSocialWork } from 'src/app/shared/navigations/navigation';

@Component({
  selector: 'app-classifieds',
  templateUrl: './classifieds.container.html',
  styleUrls: ['./classifieds.container.scss']
})
export class ClassifiedsContainer implements OnInit {
  showFiller = true;
  navigation = navigationDashboard;
  navigationClassified = navigationClassified;
  navigationSocialWork = navigationSocialWork;
  constructor() { }

  ngOnInit(): void {
  }

}
