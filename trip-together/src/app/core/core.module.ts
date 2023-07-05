import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ErrorComponent
  ]
})
export class CoreModule { }
