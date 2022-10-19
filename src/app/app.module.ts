import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
//import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    //Core y Shared... creados desde código [ng generate module core]
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    /*
    provide: LocationStrategy;
    useClass: PathLocationStrategy;
     */

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
