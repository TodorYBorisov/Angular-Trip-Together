import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './about/about.component'
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { ErrorComponent } from './core/error/error.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { CreateComponent } from './features/create/create.component';
import { EditComponent } from './features/edit/edit.component';
import { DetailsComponent } from './features/details/details.component';
import { SearchComponent } from './features/search/search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/profile', component: ProfileComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:tripId', component: EditComponent },
  { path: 'details/:tripId', component: DetailsComponent },
  { path: 'search', component: SearchComponent },


  { path: 'auth/page-not-found', component: PageNotFoundComponent },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
