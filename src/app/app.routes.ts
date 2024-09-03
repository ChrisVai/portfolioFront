import { Routes } from '@angular/router';
import {AboutMeComponent} from "./features/aboutMe/components/about-me/about-me.component";
import {HomeComponent} from "./features/home/components/home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutMeComponent, pathMatch:"full"},
];
