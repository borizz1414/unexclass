import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansRoutingModule } from './plans-routing.module';

import { PlansQuestionsContainer} from './containers/plans/plans_questions.container';
import { PlansComponent } from './components/plans/plans.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [PlansQuestionsContainer, PlansComponent],
  exports:[PlansComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PlansRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class PlansModule { }
