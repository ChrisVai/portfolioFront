import { Injectable } from '@angular/core';
import {ProjectModel} from "../shared/models/ProjectModel";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private yushoot: ProjectModel = {
    isInProgress: false,
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
    isInProgress: false,
    imgUrl: [
      "projectAssets/projetYuzu/projetYuzuHomeTiny.png",
      "projectAssets/projetYuzu/projetYuzuArticleTiny.png"
    ],
    name: "ProjetYuzu",
    shortDescription: "Site d'affichage de news",
    fullDescription: "Création d'un site d'affichage de news sous Angular 17 avec filtres asynchrones pour s'entrainer sur RxJS. <br>Les articles ont été récupérés via une API externe.<br>" +
      " Ce projet m'a été commandé par Yuzu en tant que test technique en vue d'une admission en stage de fin de cursus.",
    technologies: ["Angular 17", "TypeScript", "CSS", "API REST", "RxJs"],
    gitHubUrl: "https://github.com/ChrisVai/projetYuzu"
  }

  private portfolio: ProjectModel = {
    isInProgress: false,
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

  private wizards: ProjectModel = {
    isInProgress: false,
    imgUrl: [
      "projectAssets/wizards/wizards_wizards.png",
      "projectAssets/wizards/wizards_wizardDetail.png",
      "projectAssets/wizards/wizards_spells.png",
    ],
    name: "Wizards",
    shortDescription: "Application mobile sur le thême d'Harry Potter",
    fullDescription: "Création d'un application mobile sous Angular / Ionic affichant les sorts ainsi que les sorciers de l'univers d'Harry Potter. <br>Ce projet m'a été commandé en tant que test technique",
    technologies: ["Angular 18", "TypeScript", "SCSS", "TailwindCSS", "Signals", "Ionic"],
    gitHubUrl: "https://github.com/ChrisVai/Angular-ionic-WizardHp"
  }

  private applyBack : ProjectModel = {
    isInProgress: false,
    imgUrl: ["projectAssets/apply/nestJs.webp",],
    name: "Apply {API NestJS}",
    shortDescription: "API REST pour apply, application de gestion de candidatures professionnelles",
    fullDescription: "API réalisée avec NestJS(TypeScript). Authentification sécurisée via token JWT (Access et Refresh). Hashage du mot de passe et du token persistés. La gestion de la persistance des données est réalisée via TypeOrm et une BDD mysql (Docker). Le but final du projet apply est de permettre aux utilisateurs de gèrer leurs candidatures de manière centralisée et simple. J'ai réalisé ce projet afin de découvrir NestJS et son écosystème",
    technologies: ["NestJS", "TypeScript", "TypeOrm", "Passport", "Bcrypt", "JWT", "Docker", "MySql"],
    gitHubUrl: "https://github.com/ChrisVai/apply-api",
}

private applyFront: ProjectModel = {
  isInProgress: true,
  imgUrl: ["projectAssets/apply/angular-logo.webp",],
  name: "Apply {IHM}",
  shortDescription: "IHM pour apply, application de gestion de candidatures professionnelles",
  fullDescription: "Interface réactive réalisée avec Angular qui permettera de consulter, filtrer et gérer ses candidatures facilement avec une interface simple",
  technologies: ["Angular 18", "TypeScript", "TailwindCSS", "Signals", "JWT"],
  gitHubUrl: "https://github.com/ChrisVai/apply-front",
}

private applyAPIJava: ProjectModel = {
  isInProgress : true,
  imgUrl : ["projectAssets/apply/Spring-Java.webp"],
  name: "Apply {API Java}",
  shortDescription : "API REST sécurisée en Java (Spring) pour Apply",
  fullDescription: "API réalisée avec Spring afin de mettre en place une connexion sécurisée Stateless et de protéger l\'accès aux ressources serveur. La gestion de la persistance est confiée à Java Persistence API et une base de données Mysql. Le but final est à terme de remplacer l'API NestJs avec une solution plus robuste techniquement et en matière de sécurité.",
  technologies: ["Java EE", "Spring", "SpringBoot", "JPA", "SpringSecurity", "oAuth Resource Server", "Hibernate Validator", "Lombok", "Mysql", "Docker"],
  gitHubUrl: "https://github.com/ChrisVai/ApplyAPIJava",
}


  projects: ProjectModel[] = [this.projetYuzu, this.portfolio, this.wizards, this.yushoot,  this.applyBack, this.applyFront, this.applyAPIJava];
}
