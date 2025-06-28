import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';

 import { Technologies1Component } from './tehnologies1/tehnologies1.component';
import { Technologies2Component } from './tehnologies2/tehnologies2.component'; 
import { ProjectsComponent } from './projects/projects.component';
import { Bkgimage1Component } from './bkgimage1/bkgimage1.component';
import { Bkgimage2Component } from './bkgimage2/bkgimage2.component';

// import { PresentationComponent } from './presentation/presentation.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    ContentComponent,
    NavbarComponent,
    MessagesComponent,
   Technologies1Component,
    Technologies2Component, 
    ProjectsComponent,
    // PresentationComponent,
    Bkgimage1Component,
    Bkgimage2Component
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
