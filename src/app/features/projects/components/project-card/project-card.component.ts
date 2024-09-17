import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatChip, MatChipSet} from "@angular/material/chips";
import {CarouselComponent} from "../carousel/carousel.component";
import {ProjectModel} from "../../../../shared/models/ProjectModel";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatChip,
    MatChipSet,
    CarouselComponent

  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input({required: true}) project!: ProjectModel;
}
