import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {ProjectModel} from "../../../../shared/models/ProjectModel";
import {ProjectCardComponent} from "../project-card/project-card.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    ProjectCardComponent,
    NgOptimizedImage
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  private yushoot: ProjectModel = {
    imgUrl: ["projectAssets/yushoot/yushootDesktop.png", "projectAssets/yushoot/FullPage(iPad Pro).png", "projectAssets/yushoot/FullPageZoom(iPhone 12 Pro).png"],
    name: "Yushoot",
    shortDescription: "Refonte de le page Profil photographe de Yushoot.fr",
    fullDescription: "Refonte complète en mobile First de la page Profil Photographe du site Yushoot.fr. Amélioration de l'UX/UI." +
      "Création d'Endpoint.",
    technologies: ["Angular 17", "TypeScript", "SaSS & SCSS", "GraphQL / Apollo","NodeJs", "Express", "GraphQL","MongoDB", "Docker"],
    gitHubUrl: "https://www.google.com"
  }

  projects: ProjectModel[] = [this.yushoot]
  protected readonly PluginArray = PluginArray;
}
