import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogContent} from "@angular/material/dialog";
import {NgOptimizedImage} from "@angular/common";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-fullscreen-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    NgOptimizedImage,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './fullscreen-dialog.component.html',
  styleUrl: './fullscreen-dialog.component.css'
})
export class FullscreenDialogComponent {
 readonly data = inject(MAT_DIALOG_DATA);
}
