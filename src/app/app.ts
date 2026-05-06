import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portafolio');

    ngOnInit() {

    setTimeout(() => {
      const splash = document.getElementById('splash-screen');
      if (splash) {
        splash.style.opacity = '0';
        splash.style.transition = 'opacity 0.5s';
        splash.style.overflow = 'hidden';
        setTimeout(() => splash.remove(), 500);
      }
    }, 3500);
  }
}
