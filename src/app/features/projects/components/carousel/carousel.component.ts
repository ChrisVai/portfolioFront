import {Component, Input} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {OutlinedButtonComponent} from "../../../../shared/components/outlined-button/outlined-button.component";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatIcon,
    OutlinedButtonComponent,
    NgClass,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input({required: true}) imgUrl!: string[];
  index: number = 0;


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

