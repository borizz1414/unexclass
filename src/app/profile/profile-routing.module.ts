import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AdminProfileContainer } from './admin/containers/profile/admin-profile.container';

import { PodcastsAdminComponent } from './admin/containers/podcasts-admin/podcasts-admin.component';
import { BiographyComponent } from './containers/biography/biography.component';
import { OfficeProfileComponent } from './office/containers/office-profile/office-profile.component';
import { ProductsComponent } from './containers/products/products.component';
import { ToGetComponent } from './containers/to-get/to-get.component';
import { CommentsComponent } from './containers/comments/comments.component';
import { EventsContainer } from '../events/containers/events/events.container';
import { EventsComponent } from './containers/events/events.component';
import { AdvertisementsAdminComponent } from './admin/containers/advertisements-admin/advertisements-admin.component';
import { ClassifiedsAdminComponent } from './admin/containers/classifieds-admin/classifieds-admin.component';
import { DirectoryAdminComponent } from './admin/containers/directory-admin/directory-admin.component';
import { LivesAdminComponent } from './admin/containers/lives-admin/lives-admin.component';
import { AccountsAdminComponent } from './admin/containers/accounts-admin/accounts-admin.component';
import { ProfileGuestContainer } from './guest-view/containers/profile-guest/profile-guest.container';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'admin',
        component: AdminProfileContainer,
        children: [
          {
            path: 'biografia',
            component: BiographyComponent,
          },
          {
            path: 'productos',
            component: ProductsComponent,
          },
          {
            path: 'como-llegar',
            component: ToGetComponent,
          },
          {
            path: 'comentarios',
            component: CommentsComponent,
          },
          {
            path: 'eventos',
            component: EventsComponent,
          },
          {
            path: 'en-vivos',
            component: LivesAdminComponent,
          },
          {
            path: 'podcasts',
            component: PodcastsAdminComponent,
          },
          {
            path: 'anuncios',
            component: AdvertisementsAdminComponent,
          },
          {
            path: 'cuentas',
            component: AccountsAdminComponent,
          },
          {
            path: 'clasificados',
            component: ClassifiedsAdminComponent,
          },
          {
            path: 'directorios',
            component: DirectoryAdminComponent,
          },
          {
            path: '**',
            redirectTo: 'biografia',
          },
        ],
      },

      {
        path: 'oficina',
        component: OfficeProfileComponent,
        children: [
          {
            path: 'biografia',
            component: BiographyComponent,
          },
          {
            path: 'productos',
            component: ProductsComponent,
          },
          {
            path: 'como-llegar',
            component: ToGetComponent,
          },
          {
            path: 'comentarios',
            component: CommentsComponent,
          },
          {
            path: 'eventos',
            component: EventsComponent,
          },
          {
            path: 'anuncios',
            component: AdvertisementsAdminComponent,
          },
          {
            path: 'clasificados',
            component: ClassifiedsAdminComponent,
          },
          {
            path: 'directorios',
            component: DirectoryAdminComponent,
          },
          {
            path: '**',
            redirectTo: 'biografia',
          },
        ],
      },
      {
        path: 'usuario',
        component:ProfileGuestContainer,
        children:[
          {
            path: 'biografia',
            component: BiographyComponent,
          },
          {
            path: 'productos',
            component: ProductsComponent,
          },
          {
            path: 'como-llegar',
            component: ToGetComponent,
          },
          {
            path: 'comentarios',
            component: CommentsComponent,
          },
          {
            path: 'eventos',
            component: EventsComponent,
          },
          {
            path: '**',
            redirectTo: 'biografia',
          },
        ]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
