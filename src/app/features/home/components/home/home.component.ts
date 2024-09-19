import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {OutlinedButtonComponent} from "../../../../shared/components/outlined-button/outlined-button.component";
import {ButtonContentModel} from "../../../../shared/models/buttonContentModel";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    OutlinedButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  btnContent: ButtonContentModel = {
    title: "A propos de moi",
    path: "/about",
    routerLinkActive: false
  }
}
