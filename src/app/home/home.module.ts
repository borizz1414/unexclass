import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { DashboardContainer } from './containers/dashboard/dashboard.container';
import { SharedModule } from '../shared/shared.module';
import { PublicityComponent } from './components/publicity/publicity.component';
import { ListDirectoryComponent } from './components/list-directory/list-directory.component';
import { BannerRightComponent } from './components/banner-right/banner-right.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchListComponent } from './components/search-list/search-list.component';
import { ClassifiedComponent } from './components/classified/classified.component';
import { VirtualOfficeContainer } from './containers/virtual-office/virtual-office.container';
import { ClassifiedsContainer } from './containers/classifieds/classifieds.container';
import { SocialWorkContainer } from './containers/social-work/social-work.container';
import { PostsOfficeComponent } from './components/posts-office/posts-office.component';
import { CardClassifiedComponent } from './shared/components/card-classified/card-classified.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [DashboardContainer, PublicityComponent,ListDirectoryComponent,BannerRightComponent, SearchListComponent,ClassifiedComponent, VirtualOfficeContainer, ClassifiedsContainer, SocialWorkContainer, PostsOfficeComponent, CardClassifiedComponent],
  exports:[PublicityComponent,ListDirectoryComponent,BannerRightComponent,PostsOfficeComponent,ClassifiedComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, SharedModule, ReactiveFormsModule, FlexLayoutModule],
})
export class HomeModule {}
