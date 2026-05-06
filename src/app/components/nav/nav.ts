import { Component, signal, ChangeDetectionStrategy, effect, inject } from '@angular/core';
import { Scroll } from '../../services/scroll';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Nav {
  private scrollService = inject(Scroll);

  menuAbierto = signal(false);
  isSticky = signal(false);

  constructor() {
    effect(() => {
      document.body.style.overflow = this.menuAbierto() ? 'hidden' : 'auto';
    });
  }

  navigateTo(sectionId: string): void {
    this.closeMenu();
    setTimeout(() => {
      this.scrollService.scrollToSection(sectionId);
    }, 50);
  }

  toggleMenu() {
    this.menuAbierto.update(v => !v);
  }

  closeMenu() {
    this.menuAbierto.set(false);
  }

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const scrollY = window.scrollY;
    const alturaPagina = document.body.scrollHeight - window.innerHeight;
    const porcentaje = scrollY / alturaPagina;
    this.isSticky.set(porcentaje > 0.05);
  };
}
