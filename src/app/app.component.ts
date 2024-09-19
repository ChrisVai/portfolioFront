import {Component, DestroyRef, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./shared/components/header/header.component";
import {HomeComponent} from "./features/home/components/home/home.component";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {HeaderMobileComponent} from "./shared/components/header-mobile/header-mobile.component";
import {map, Observable} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {AsyncPipe} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, HeaderMobileComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title: string = 'portflioFront';
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private readonly breakpointObserver: BreakpointObserver = inject(BreakpointObserver);
  isMobile$: Observable<boolean> = this.breakpointObserver.observe([
    Breakpoints.XSmall,
    Breakpoints.Small,
  ]).pipe(
    takeUntilDestroyed(this.destroyRef),
    map((result: BreakpointState) => result.matches)
  )
}
