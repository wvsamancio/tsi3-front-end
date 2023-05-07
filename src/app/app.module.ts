import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfosComponent } from './infos/infos.component';
import { ContributeComponent } from './contribute/contribute.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InfoDetailsComponent } from './info-details/info-details.component';
import { ContributeDetailsComponent } from './contribute-details/contribute-details.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    InfosComponent,
    ContributeComponent,
    ContributionsComponent,
    ContactsComponent,
    InfoDetailsComponent,
    ContributeDetailsComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
