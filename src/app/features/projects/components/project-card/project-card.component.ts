import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() imgUrl?: string[];
  @Input({required: true}) name!: string;
  @Input({required: true}) shortDescription!: string;
  @Input({required: true}) fullDescription!: string;
  @Input() frontTechno?: string[];
  @Input() backTechno?: string[];
  @Input() BDDTechno?: string[];
}
