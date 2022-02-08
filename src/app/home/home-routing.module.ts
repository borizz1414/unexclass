import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ClassifiedsContainer } from './containers/classifieds/classifieds.container';
import { DashboardContainer } from './containers/dashboard/dashboard.container';
import { SocialWorkContainer } from './containers/social-work/social-work.container';
import { VirtualOfficeContainer } from './containers/virtual-office/virtual-office.container';

const routes: Routes = [
  {
    path: '',
    
    component: LayoutComponent,
    children: [
      {
        path: 'directorio',
        component: DashboardContainer,
      },
      {
        path: 'red',
        component: VirtualOfficeContainer,
      },
      {
        path: 'clasificados',
        component: ClassifiedsContainer,
      },
      
      {
        path: 'labor-social',
        component: SocialWorkContainer,
      },
      {
      path: 'perfil',
      // canActivate:[AuthGuard],
      loadChildren: () => import('../profile/profile.module').then((m) => m.ProfileModule),
    },
      
      
        {
    path: '**',
    redirectTo: 'directorio',
  },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
