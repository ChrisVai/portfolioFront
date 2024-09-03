import { Routes } from '@angular/router';
import {AboutMeComponent} from "./features/aboutMe/components/about-me/about-me.component";
import {HomeComponent} from "./features/home/components/home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: "full"},
  {path: 'aboutme', component: AboutMeComponent, pathMatch: "full"}
];
