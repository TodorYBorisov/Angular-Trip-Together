import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './about/about.component'
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
// import { ProfileComponent } from './auth/profile/profile.component';

// import { ErrorComponent } from './core/error/error.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { CreateComponent } from './features/create/create.component';
import { EditComponent } from './features/edit/edit.component';
import { DetailsComponent } from './features/details/details.component';
import { SearchComponent } from './features/search/search.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', component: HomeComponent, title: 'TripTogether' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, title: 'Home Page' },
  { path: 'about', component: AboutComponent, title: 'About Page' },
  // { path: 'auth/login', component: LoginComponent, title: 'Login Page' },
  // { path: 'auth/register', component: RegisterComponent, title: 'Sing Up' },
  // { path: 'auth/logout', redirectTo: 'home', title: 'Home Page' },
  // { path: 'auth/profile', component: ProfileComponent, title: 'Profile Page' },
  { path: 'create', component: CreateComponent, title: 'Create Page' },
  { path: 'catalog', component: CatalogComponent, title: 'Trips Page' },
  // { path: 'catalog/id', component: TripDetailsComponent, title: 'Trips Details' },
  { path: 'edit/:id', component: EditComponent, title: 'Edit Page' },
  { path: 'details/:id', component: DetailsComponent, title: 'Details Page' },
  { path: 'search', component: SearchComponent, title: 'Search Page' },
  { path: '**', component: PageNotFoundComponent, title: '404 Page' },
  // { path: '**', redirectTo: 'not-found', title: '404 Page' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }