import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    NavbarComponent,
  
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ErrorComponent,
  
  ]
})
export class CoreModule { }
