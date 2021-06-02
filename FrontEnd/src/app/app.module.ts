import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/Landing/home/home.component';
import { HomeNavbarComponent } from 'src/NavBar/home-navbar/home-navbar.component';
import { UserLoginComponent } from 'src/Login/user-login/user-login.component';
import { AdminLoginComponent } from 'src/Login/admin-login/admin-login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserSignupComponent } from 'src/Signup/user-signup/user-signup.component';
import { AdminDashboardComponent } from 'src/Dashboard/admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from 'src/NavBar/admin-navbar/admin-navbar.component';
import { AddTypeComponent } from 'src/AdminComponents/add-type/add-type.component';
import { FilterPipe } from './filter.pipe';
import { AddWineTypeComponent } from 'src/AdminComponents/add-wine-type/add-wine-type.component';
import { UpdateTypeComponent } from 'src/AdminComponents/update-type/update-type.component';
import { UpdateWineTypeComponent } from 'src/AdminComponents/update-wine-type/update-wine-type.component';
import { DeleteTypeComponent } from 'src/AdminComponents/delete-type/delete-type.component';
import { DeleteWineTypeComponent } from 'src/AdminComponents/delete-wine-type/delete-wine-type.component';
import { UserDashboardComponent } from 'src/Dashboard/user-dashboard/user-dashboard.component';
import { TwoIngredientPairingComponent } from 'src/UserComponents/two-ingredient-pairing/two-ingredient-pairing.component';
import { IngredientAndPrepComponent } from 'src/UserComponents/ingredient-and-prep/ingredient-and-prep.component';
import { MultiIngredientPairingComponent } from 'src/UserComponents/multi-ingredient-pairing/multi-ingredient-pairing.component';
import { FilterPrepPipe } from './filter-prep.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavbarComponent,
    UserLoginComponent,
    AdminLoginComponent,
    UserSignupComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    AddTypeComponent,
    FilterPipe,
    AddWineTypeComponent,
    UpdateTypeComponent,
    UpdateWineTypeComponent,
    DeleteTypeComponent,
    DeleteWineTypeComponent,
    UserDashboardComponent,
    TwoIngredientPairingComponent,
    IngredientAndPrepComponent,
    MultiIngredientPairingComponent,
    FilterPrepPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
