import { Routes } from '@angular/router';
import {AboutMeComponent} from "./features/aboutMe/components/about-me/about-me.component";
import {HomeComponent} from "./features/home/components/home/home.component";
import {ProjectsComponent} from "./features/projects/components/projects/projects.component";
import {PageNotFoundComponent} from "./error/page-not-found/page-not-found.component";


export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'home', component: HomeComponent, pathMatch: "full"},
  {path: 'about', component: AboutMeComponent, pathMatch: "full"},
  {path: 'projects', component: ProjectsComponent, pathMatch: "full"},
  {path: '**', component: PageNotFoundComponent},
];
