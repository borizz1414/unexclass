import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HeaderProfileComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { AdminProfileContainer } from './admin/containers/profile/admin-profile.container';
import { HomeModule } from '../home/home.module';
import { MaterialModule } from '../material/material.module';

import { BiographyComponent } from './containers/biography/biography.component';
import { TableCrudComponent } from './components/table-crud/table-crud.component';
import { AddLiveComponent } from './admin/shared/add-dialogs/add-live/add-live.component';
import { AddPodcastsComponent } from './admin/shared/add-dialogs/add-podcasts/add-podcasts.component';
import { AddAdComponent } from './admin/shared/add-dialogs/add-ad/add-ad.component';
import { AddDirectoryComponent } from './admin/shared/add-dialogs/add-directory/add-directory.component';
import { AddClassifiedComponent } from './admin/shared/add-dialogs/add-classified/add-classified.component';
import { EditAccountComponent } from './admin/shared/add-dialogs/edit-account/edit-account.component';
import { ProductsComponent } from './containers/products/products.component';
import { ToGetComponent } from './containers/to-get/to-get.component';
import { CommentsComponent } from './containers/comments/comments.component';
import { OfficeProfileComponent } from './office/containers/office-profile/office-profile.component';
import { EventsComponent } from './containers/events/events.component';
import { CompleteProfileComponent } from './office/components/complete-profile/complete-profile.component';
import { EventsModule } from '../events/events.module';
import { DirectoryAdminComponent } from './admin/containers/directory-admin/directory-admin.component';
import { LivesAdminComponent } from './admin/containers/lives-admin/lives-admin.component';
import { PodcastsAdminComponent } from './admin/containers/podcasts-admin/podcasts-admin.component';
import { AdvertisementsAdminComponent } from './admin/containers/advertisements-admin/advertisements-admin.component';
import { AccountsAdminComponent } from './admin/containers/accounts-admin/accounts-admin.component';
import { ClassifiedsAdminComponent } from './admin/containers/classifieds-admin/classifieds-admin.component';
import { ProductDialogComponent } from './shared/dialogs/product-dialog/product-dialog.component';
import { ProfileGuestContainer } from './guest-view/containers/profile-guest/profile-guest.container';
import { ReactiveFormsModule } from '@angular/forms';
import { BuyProductComponent } from './shared/dialogs/buy-product/buy-product.component';
import { CommentsFeedbackComponent } from './shared/dialogs/comments-feedback/comments-feedback.component';
import { FlexLayoutModule } from '@angular/flex-layout';





@NgModule({
  declarations: [HeaderProfileComponent, SidebarComponent, MenuComponent, AdminProfileContainer, DirectoryAdminComponent, LivesAdminComponent, PodcastsAdminComponent, AdvertisementsAdminComponent, AccountsAdminComponent, ClassifiedsAdminComponent, BiographyComponent, TableCrudComponent, AddLiveComponent, AddPodcastsComponent, AddAdComponent, AddDirectoryComponent, AddClassifiedComponent, EditAccountComponent, ProductsComponent, ToGetComponent, CommentsComponent, OfficeProfileComponent, EventsComponent, CompleteProfileComponent, ProductDialogComponent, ProfileGuestContainer, BuyProductComponent, CommentsFeedbackComponent ],
  exports: [HeaderProfileComponent, SidebarComponent, MenuComponent, AdminProfileContainer],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HomeModule,
    MaterialModule,
    EventsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class ProfileModule { }
