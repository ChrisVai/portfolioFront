import {Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ButtonContentModel} from "../../models/buttonContentModel";

@Component({
  selector: 'app-outlined-button',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './outlined-button.component.html',
  styleUrl: './outlined-button.component.css'
})
export class OutlinedButtonComponent {
  @Input({required: true}) content!: ButtonContentModel;
  @Input({required: true}) routerLinkActive!: boolean;
}
