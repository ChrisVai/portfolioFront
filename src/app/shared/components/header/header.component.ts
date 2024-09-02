import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {OutlinedButtonComponent} from "../outlined-button/outlined-button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatButton,
    MatAnchor,
    MatIcon,
    MatButtonToggle,
    OutlinedButtonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  test: string ="test";
  btnContent: string[] = [
    "A propos",
    "Expériences",
    "Contact",
  ]
}
