import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './about/about.component'
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent, title: 'Home Page' },
  { path: 'learn-more', component: AboutComponent, title: 'Learn More Page' },
  { path: 'error', component: ErrorComponent },
  { path: 'not-found', component: PageNotFoundComponent, title: '404 Page' },
  { path: '**', redirectTo: 'not-found', title: '404 Page' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }