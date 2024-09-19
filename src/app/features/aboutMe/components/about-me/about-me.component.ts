import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {OutlinedButtonComponent} from "../../../../shared/components/outlined-button/outlined-button.component";
import {ButtonContentModel} from "../../../../shared/models/buttonContentModel";
import {fakeAsync} from "@angular/core/testing";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    NgOptimizedImage,
    OutlinedButtonComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  content: string =
    'Ma passion pour la technique et les nouvelles technologies m\'ont logiquement fait passer du commerce de détail au développement Web.\n\n' +
    'J\'ai débuté ma carrière dans le commerce d\'instruments de musique en exercant pendant 15 ans aux postes de vendeur, chef de rayon et responsable de département et formateur.\n\n'+
    'Je suis tombé amoureux du développement peu avant le covid et je me suis ensuite auto-formé grâce à la masse de ressource aujourd\'hui disponible sur internet.\n\n'+
    'Sentant qur pour vraiment progresser il fallait me plonger à temps plein dans le dev, j\'ai décidé de quitter mon poste afin de démarrer une formation à plein temps : '+
    'Celle de Développeur Web et Web Mobile de l\'ENI.\n\n'+
    'Après avoir réalisé un stage concluant chez Yuzu IT et obtenu mon diplôme, j\'ai commencé à me spécialiser sur Angular à travers divers projets de cours, personnels ou professionnels.\n\n'+
    'Retrouvez certains de ces derniers dans l\'onglet "Projets" de ce Portfolio.';

  btnContent: ButtonContentModel = {
    title: "Mes Projets",
    path: "/projects",
    routerLinkActive: false
  }
  protected readonly fakeAsync = fakeAsync;
}
