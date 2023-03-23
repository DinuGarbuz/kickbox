import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ScheduleComponent,
    ContactUsComponent,
    FooterComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'orar', component: ScheduleComponent },
      { path: 'galerie', component: GalleryComponent },
      { path: 'contact', component: ContactUsComponent },
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: '**', redirectTo: '' },
    ]),
    //GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
