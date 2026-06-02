import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';

import { Technologies1Component } from './tehnologies1/tehnologies1.component';
import { Technologies2Component } from './tehnologies2/tehnologies2.component';
import { ProjectsComponent } from './projects/projects.component';
import { PresentationComponent } from './presentation/presentation.component';

import { TechnologyComponent } from './technology/technology.component';
import { ExperienceComponent } from './experience/experience.component';
import { DomainsComponent } from './domains/domains.component';
import { EducationComponent } from './education/education.component';
import { LanguagesComponent } from './languages/languages.component';


const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'content/:id', component: ContentComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'content/ABOUT', component: PresentationComponent },
  { path: 'content/TECHNOLOGIES', component: TechnologyComponent },
  { path: 'content/EXPERIENCE', component: ExperienceComponent },
  { path: 'content/DOMAINS', component: DomainsComponent },
  { path: 'content/EDUCATION', component: EducationComponent },
  { path: 'content/LANGUAGES', component: LanguagesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
