import { Component } from '@angular/core';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {ButtonContentModel} from "../../models/buttonContentModel";

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [
    MatMenu,
    MatButton,
    MatMenuTrigger,
    MatMenuItem,
    NgOptimizedImage,
    RouterLink,
    MatIcon
  ],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.css'
})
export class HeaderMobileComponent {
  btnContent: ButtonContentModel[] = [
    {
      title: "A propos",
      path: "about"
    },
    {
      title: "Projets",
      path: "projects"
    },
  ]

  downloadCV() {
    window.open("CV/Christophe Bellet 2024 v1.8.pdf")
  }
}