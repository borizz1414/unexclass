import { Component, OnInit } from '@angular/core';
import { navigationPodcasts } from 'src/app/shared/navigations/navigation';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.container.html',
  styleUrls: ['./podcasts.container.scss']
})
export class PodcastsContainer implements OnInit {
  navigation = navigationPodcasts
  constructor() { }

  ngOnInit(): void {
  }

}
