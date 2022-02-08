import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PodcastsRoutingModule } from './podcasts-routing.module';
import { PodcastsContainer } from './containers/podcasts/podcasts.container';
import { SharedModule } from '../shared/shared.module';
import { CardsPodcastsComponent } from './components/cards-podcasts/cards-podcasts.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [PodcastsContainer, CardsPodcastsComponent],
  imports: [
    CommonModule,
    PodcastsRoutingModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class PodcastsModule { }
