import { DealsComponent } from './deals/deals.component';
import { CheckdealComponent } from './checkdeal/checkdeal.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'checkdeal', component: CheckdealComponent},
  { path: 'deals', component: DealsComponent},
  { path: 'profile', component: ProfileComponent, data: {animation: 'profile'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
