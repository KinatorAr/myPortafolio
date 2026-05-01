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
  animDir      = signal<'next' | 'prev' | ''>('');
  hovered      = signal(false);
  isAnimating  = signal(false);

  currentItem = computed(() => this.items[this.currentIndex()]);
  peekLeft    = computed(() => this.items[(this.currentIndex() - 1 + this.items.length) % this.items.length]);
  peekRight   = computed(() => this.items[(this.currentIndex() + 1) % this.items.length]);

  private autoTimer: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.autoTimer = setInterval(() => this.next(), 5000);
  }

  ngOnDestroy(): void {
    if (this.autoTimer) clearInterval(this.autoTimer);
  }

  next(): void {
    if (this.isAnimating()) return;
    this.triggerAnim('next');
    this.currentIndex.update(i => (i + 1) % this.items.length);
    this.resetTimer();
  }

  prev(): void {
    if (this.isAnimating()) return;
    this.triggerAnim('prev');
    this.currentIndex.update(i => (i - 1 + this.items.length) % this.items.length);
    this.resetTimer();
  }

  goTo(index: number): void {
    if (this.isAnimating() || index === this.currentIndex()) return;
    const dir = index > this.currentIndex() ? 'next' : 'prev';
    this.triggerAnim(dir);
    this.currentIndex.set(index);
    this.resetTimer();
  }

  private triggerAnim(dir: 'next' | 'prev'): void {
    this.isAnimating.set(true);
    this.animDir.set(dir);
    setTimeout(() => {
      this.animDir.set('');
      this.isAnimating.set(false);
    }, 420);
  }

  private resetTimer(): void {
    if (this.autoTimer) {
      clearInterval(this.autoTimer);
      this.autoTimer = setInterval(() => this.next(), 5000);
    }
  }
}
