import { Injectable } from '@angular/core';
import {ProjectModel} from "../shared/models/ProjectModel";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private yushoot: ProjectModel = {
    imgUrl: ["projectAssets/yushoot/yushootDesktop.png", "projectAssets/yushoot/FullPage(iPad Pro).png", "projectAssets/yushoot/FullPageZoom(iPhone 12 Pro).png"],
    name: "Yushoot",
    shortDescription: "Refonte de le page Profil photographe de Yushoot.fr",
    fullDescription: "Refonte complète en mobile First de la page Profil Photographe du site Yushoot.fr. Amélioration de l'UX/UI." +
      "Création d'Endpoint.",
    technologies: ["Angular 17", "TypeScript", "SaSS & SCSS", "GraphQL / Apollo","NodeJs", "Express", "GraphQL","MongoDB", "Docker"],
  }

  projects: ProjectModel[] = [this.yushoot]
}
