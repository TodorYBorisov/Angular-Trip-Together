import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { HttpClientModule} from '@angular/common/http'
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent

  ],
  imports: [
    AuthModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    FeaturesModule,
    AppRoutingModule,
    
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
