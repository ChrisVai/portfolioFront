import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {OutlinedButtonComponent} from "../outlined-button/outlined-button.component";
import {RouterLink} from "@angular/router";

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
  test: string ="test";
  btnContent = [
    {
      title: "A propos",
      path: "about"
    },
    {
      title: "Projets",
      path: "projects"
    },
  ]

  download() {
    window.open("CV/Christophe Bellet 2024 v1.8.pdf")
  }
}
