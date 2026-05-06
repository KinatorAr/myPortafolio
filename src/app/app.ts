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
    this.hideSplashScreen();
  }

  private hideSplashScreen() {
    const splash = document.getElementById('splash-screen');
    if (splash) {
      splash.style.transition = 'opacity 0.5s ease, visibility 0.5s';
      splash.style.opacity = '0';
      splash.style.visibility = 'hidden';

      setTimeout(() => {
        splash.remove();
      }, 500);
    }
  }
}
