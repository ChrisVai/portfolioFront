import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {ProjectModel} from "../../../../shared/models/ProjectModel";
import {ProjectCardComponent} from "../project-card/project-card.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  private yushoot: ProjectModel = {
    imgUrl: ["projectAssets/yushoot/yushootDesktop.png"],
    name: "Yushoot",
    shortDescription: "Refonte de le page Profil photographe de Yushoot.fr",
    fullDescription: "Refonte complète en mobile First de la page Profil Photographe du site Yushoot.fr. Amélioration de l'UX/UI.",
    frontTechno: ["Angular 17", "TypeScript", "SaSS & SCSS", "GraphQL / Apollo"],
    backTechno: ["NodeJs", "Express", "GraphQL"],
    bddTechno: ["MongoDB", "Docker"],
  }

  projects: ProjectModel[] = [this.yushoot]
}
