import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  content: string =
    'Ma passion pour la technique et les nouvelles technologies m\'ont logiquement fait passer du commerce de détail au développement Web.\n\n' +
    'Après avoir suivi la formation de Développeur Web et Web Mobile de l\'ENI et ayant une appétence certaine pour le Front, j\'ai commencé à me spécialiser sur Angular à travers divers projets de cours, personnels ou professionnels.';
}
