import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfosComponent } from './infos/infos.component';
import { ContributeComponent } from './contribute/contribute.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { InfoDetailsComponent } from './info-details/info-details.component';
import { ContributeDetailsComponent } from './contribute-details/contribute-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'infos', component: InfosComponent },
  { path: 'infos/:id', component: InfoDetailsComponent },
  { path: 'contribute', component: ContributeComponent },
  { path: 'contributions/:username', component: ContributionsComponent },
  { path: 'contributions/:username/:id', component: ContributeDetailsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: 'infos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
