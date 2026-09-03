import { Component, ChangeDetectionStrategy, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { Scroll } from '../../services/scroll';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Hero {
  private scrollService = inject(Scroll);

  // --- Typewriter ---
  protected readonly typedText = signal('');

  private readonly words = [
    'Desarrollador Fullstack Freelancer',
    'Angular / React / Node.js / .NET',
    'Interfaces web modernas'
  ];

  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId?: ReturnType<typeof setTimeout>;

  private readonly typingSpeed = 90;      // ms por letra al escribir
  private readonly deletingSpeed = 45;    // ms por letra al borrar
  private readonly pauseAfterTyping = 1800; // pausa con la palabra completa
  private readonly pauseAfterDeleting = 400; // pausa antes de la siguiente palabra

  ngOnInit(): void {
    this.tick();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private tick(): void {
    const currentWord = this.words[this.wordIndex];

    if (!this.isDeleting) {
      // Escribiendo
      this.charIndex++;
      this.typedText.set(currentWord.substring(0, this.charIndex));

      if (this.charIndex === currentWord.length) {
        // Palabra completa: pausa y luego empieza a borrar
        this.isDeleting = true;
        this.timeoutId = setTimeout(() => this.tick(), this.pauseAfterTyping);
        return;
      }
    } else {
      // Borrando
      this.charIndex--;
      this.typedText.set(currentWord.substring(0, this.charIndex));

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
        this.timeoutId = setTimeout(() => this.tick(), this.pauseAfterDeleting);
        return;
      }
    }

    const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
    this.timeoutId = setTimeout(() => this.tick(), speed);
  }

  navigateTo(sectionId: string): void {
    setTimeout(() => {
      this.scrollService.scrollToSection(sectionId);
    }, 50);
  }
}
