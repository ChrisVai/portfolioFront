import {AfterViewInit, Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {OutlinedButtonComponent} from "../../../../shared/components/outlined-button/outlined-button.component";
import {ButtonContentModel} from "../../../../shared/models/buttonContentModel";
import { gsap } from "gsap"

@Component({
    selector: 'app-home',
    imports: [
        NgOptimizedImage,
        OutlinedButtonComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{

  btnContent: ButtonContentModel = {
    title: "A propos de moi",
    path: "/about",
    routerLinkActive: false
  }

  ngAfterViewInit(): void {
    let tl= gsap.timeline()
    tl.fromTo("h1", {duration: 1, x: 500}, {duration: 1, x: 0})
    tl.fromTo("h2", {duration: 1, y: 500}, {duration: 1, y: 0})
    tl.from("app-outlined-button", {duration: 1, opacity: 0})

    gsap.set(".ball", {xPercent: -100, yPercent: -100});

    window.addEventListener("mousemove", e => {
      gsap.to(".ball", {
        duration: 0.35,
        x: e.pageX,
        y: e.pageY,
        ease: "none",
        overwrite: "auto",
        stagger: 0.035,
      });
    });
  }
}
