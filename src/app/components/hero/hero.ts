import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Scroll } from '../../services/scroll';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Hero {
  private scrollService = inject(Scroll);

  navigateTo(sectionId: string): void {
    setTimeout(() => {
      this.scrollService.scrollToSection(sectionId);
    }, 50);
  }
}
