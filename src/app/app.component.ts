import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./shared/components/header/header.component";
import {HomeComponent} from "./features/home/components/home/home.component";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {HeaderMobileComponent} from "./shared/components/header-mobile/header-mobile.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, HeaderMobileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'portflioFront';
  isMobile:boolean= inject(BreakpointObserver).isMatched(Breakpoints.XSmall);
}
