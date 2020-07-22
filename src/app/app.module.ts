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
import { FormsModule } from '@angular/forms';
import { ExecFormComponent } from './simulation-form/exec-form/exec-form.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SimulationFormComponent,
    ExecFormComponent,
    HomePageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FontAwesomeModule,
    BrowserModule,
    SamFooterModule,
    SamHeaderModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
   library.add(fas, sds);
  }
}
