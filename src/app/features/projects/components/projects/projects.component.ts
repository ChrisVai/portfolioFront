import {Component, inject} from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {ProjectModel} from "../../../../shared/models/ProjectModel";
import {ProjectCardComponent} from "../project-card/project-card.component";
import {NgOptimizedImage} from "@angular/common";
import {ProjectService} from "../../../../services/project-service.service";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    ProjectCardComponent,
    NgOptimizedImage
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  private readonly projectService: ProjectService = inject(ProjectService);
  projects: ProjectModel[] = this.projectService.projects;
}
