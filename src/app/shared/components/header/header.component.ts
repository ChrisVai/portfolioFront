import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {OutlinedButtonComponent} from "../outlined-button/outlined-button.component";
import {RouterLink} from "@angular/router";
import {ButtonContentModel} from "../../models/buttonContentModel";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatButton,
    MatAnchor,
    MatIcon,
    MatButtonToggle,
    OutlinedButtonComponent,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  btnContent: ButtonContentModel[] = [
    {
      title: "Accueil",
      path: "home",
      routerLinkActive: true
    },
    {
      title: "A propos",
      path: "about",
      routerLinkActive: true
    },
    {
      title: "Projets",
      path: "projects",
      routerLinkActive: true
    },
  ]

  cvContent: ButtonContentModel = {
    title: "CV",
    routerLinkActive: false
  }

  linkedInUrl: string = "https://www.linkedin.com/in/christophe-bellet";
  gitHubUrl: string = "https://github.com/ChrisVai";
  mail: string = "mailto:chrisbellet@gmail.com";

  download() {
    window.open("CV/Christophe Bellet 2024 v1.8.pdf")
  }
}
