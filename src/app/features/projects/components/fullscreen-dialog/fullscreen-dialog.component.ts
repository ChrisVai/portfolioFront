import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogContent} from "@angular/material/dialog";
import {NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'app-fullscreen-dialog',
    imports: [
        MatDialogContent,
        NgOptimizedImage,
    ],
    templateUrl: './fullscreen-dialog.component.html',
    styleUrl: './fullscreen-dialog.component.css'
})
export class FullscreenDialogComponent {
 readonly data = inject(MAT_DIALOG_DATA);
}
