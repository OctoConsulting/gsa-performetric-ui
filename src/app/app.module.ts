import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { SamFooterModule } from './common/sam-footer/sam-footer.module';
import { SamHeaderModule } from './common/sam-header/sam-header.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimulationFormComponent } from './simulation-form/simulation-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import {SdsPageModule, SdsToolbarModule, SdsAccordionModule} from '@gsa-sam/components';
import { FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { RepeatTypeComponent } from './repeat-section.type';
import { HttpClientModule } from '@angular/common/http';
import { SimulationService } from './simulation.service';
 
@NgModule({
  declarations: [
    AppComponent,
    SimulationFormComponent,
    HomePageComponent,
    RepeatTypeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    SamFooterModule,
    SamHeaderModule,
    AppRoutingModule,
    SdsPageModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsFormlyModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    FormlyModule.forRoot({
      types: [
        { name: 'repeat', component: RepeatTypeComponent },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    })
  ],
  providers: [SimulationService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
   library.add(fas, sds);
  }
}
