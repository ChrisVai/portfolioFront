import {Component, inject, Input} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {OutlinedButtonComponent} from "../../../../shared/components/outlined-button/outlined-button.component";
import {MatDialog} from "@angular/material/dialog";
import {FullscreenDialogComponent} from "../fullscreen-dialog/fullscreen-dialog.component";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatIcon,
    OutlinedButtonComponent,
    NgClass,
    MatTooltip,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input({required: true}) imgUrl!: string[];
  dialog: MatDialog = inject(MatDialog);
  index: number = 0;

openDialog(imgUrl: string) {
  this.dialog.open(FullscreenDialogComponent, {
    data: {
      img: imgUrl,
    },
  });
}

  nextPicture() {
    if(this.index < this.imgUrl.length -1) {
      this.index ++;
    }
  }

  prevPicture(): void {
    if(this.index > 0) {
      this.index --;
    }
  }

  isFirst(): boolean {
    return this.index === 0;
  }

  isLast(): boolean {
    return this.index === this.imgUrl.length -1
  }

  isSelected(index: number) {
    return index === this.index;
  }
}

