import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/Landing/home/home.component';
import { UserLoginComponent } from 'src/Login/user-login/user-login.component';
import { AdminLoginComponent } from 'src/Login/admin-login/admin-login.component';
import { UserSignupComponent } from 'src/Signup/user-signup/user-signup.component';
import { AdminDashboardComponent } from 'src/Dashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from 'src/Dashboard/user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'user-signup', component: UserSignupComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'user-dashboard', component: UserDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
