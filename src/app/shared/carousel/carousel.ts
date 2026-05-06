import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  signal,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CarouselItem {
  imageUrl: string;
  title: string;
  subtitle?: string;
  tag?: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel implements OnInit, OnDestroy {
  @Input() items: CarouselItem[] = [];
  currentIndex = signal(0);
  animDir = signal('');
  hovered = signal(false);

  currentItem = computed(() => this.items[this.currentIndex()]);
  peekLeft = computed(() => this.items[(this.currentIndex() - 1 + this.items.length) % this.items.length]);
  peekRight = computed(() => this.items[(this.currentIndex() + 1) % this.items.length]);

  private autoTimer: any;

  ngOnInit() { this.resetTimer(); }
  ngOnDestroy() { if (this.autoTimer) clearInterval(this.autoTimer); }

  next() {
    this.animDir.set('next');
    this.currentIndex.update(i => (i + 1) % this.items.length);
    this.resetTimer();
  }

  prev() {
    this.animDir.set('prev');
    this.currentIndex.update(i => (i - 1 + this.items.length) % this.items.length);
    this.resetTimer();
  }

  goTo(idx: number) {
    this.animDir.set(idx > this.currentIndex() ? 'next' : 'prev');
    this.currentIndex.set(idx);
    this.resetTimer();
  }

  toggleHover() {
    // Para móviles, un click alterna la visibilidad del contenido
    if (window.innerWidth <= 768) {
      this.hovered.update(v => !v);
    }
  }

  private resetTimer() {
    if (this.autoTimer) clearInterval(this.autoTimer);
    this.autoTimer = setInterval(() => this.next(), 6000);
  }
}
