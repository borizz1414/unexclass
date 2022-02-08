import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule,FlexLayoutModule],
})
export class SharedModule {}
