import { Component } from '@angular/core';
import {OutlinedButtonComponent} from "../../shared/components/outlined-button/outlined-button.component";
import {ButtonContentModel} from "../../shared/models/buttonContentModel";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    OutlinedButtonComponent
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
  btnContent: ButtonContentModel = {
    title: "Essayez-donc ici",
    path: "",
    routerLinkActive: false
  }
}
