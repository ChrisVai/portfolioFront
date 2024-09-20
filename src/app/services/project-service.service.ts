import { Injectable } from '@angular/core';
import {ProjectModel} from "../shared/models/ProjectModel";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private yushoot: ProjectModel = {
    imgUrl: [
      "projectAssets/yushoot/yushootDesktop.png",
      "projectAssets/yushoot/FullPage(iPad Pro).png",
      "projectAssets/yushoot/FullPageZoom(iPhone 12 Pro).png"
    ],
    name: "Yushoot",
    shortDescription: "Refonte de le page Profil photographe de Yushoot.fr",
    fullDescription: "Refonte complète en mobile First de la page Profil Photographe du site Yushoot.fr. Amélioration de l'UX/UI et optimisation des performances via RxJS et ChangeDetectionStrategy.OnPush.<br>" +
      "Création d'Endpoint sur l'API GraphQL.",
    technologies: ["Angular 17", "TypeScript", "SaSS & SCSS", "RxjS", "GraphQL / Apollo","NodeJs", "Express", "GraphQL","MongoDB", "Docker"],
  }

  private projetYuzu: ProjectModel = {
    imgUrl: [
      "projectAssets/projetYuzu/projetYuzuHomeTiny.png",
      "projectAssets/projetYuzu/projetYuzuArticleTiny.png"
    ],
    name: "projetYuzu",
    shortDescription: "Site d'affichage de news",
    fullDescription: "Création d'un site d'affichage de news sous Angular 17 avec filtres asynchrones pour s'entrainer sur RxJS. <br>Les articles ont été récupérés via une API externe.<br>" +
      " Ce projet m'a été commandé par Yuzu en tant que test technique en vue d'une admission en stage de fin de cursus.",
    technologies: ["Angular 17", "TypeScript", "CSS", "API REST", "RxJs"],
    gitHubUrl: "https://github.com/ChrisVai/projetYuzu"
  }

  private portfolio: ProjectModel = {
    imgUrl: [
      "projectAssets/portfolio/portfolioHomeDesktop.png",
      "projectAssets/portfolio/portfolioAboutDesktop.png",
      "projectAssets/portfolio/portfolioProjectDesktop.png",
      "projectAssets/portfolio/portfolioHomeMobile.png",
      "projectAssets/portfolio/portfolioAboutMobile.png",
      "projectAssets/portfolio/portfolioProjectsMobile.png"
    ],
    name: "Portfolio",
    shortDescription: "Mon portfolio",
    fullDescription: "Réalisation de mon portfolio sous Angular 18 afin de continuer la pratique de ce framework et de rendre visible mes travaux passés et futurs.",
    technologies: ["Angular 18", "TypeScript", "SCSS"],
    gitHubUrl: "https://github.com/ChrisVai/portflioFront"
}

  projects: ProjectModel[] = [this.yushoot, this.projetYuzu, this.portfolio]
}
