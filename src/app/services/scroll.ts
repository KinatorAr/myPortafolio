import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Scroll {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const nav = document.querySelector('.contenedor-navegacion') as HTMLElement;
    const navHeight = nav ? nav.offsetHeight : 4;

    const isSticky = nav?.classList.contains('sticky-activo');

    const offsetTop = element.getBoundingClientRect().top + window.scrollY - (isSticky ? navHeight : 0);

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
}
