import { Component } from '@angular/core';
import { Carousel, CarouselItem } from '../../shared/carousel/carousel';

@Component({
  selector: 'app-models',
  imports: [Carousel],
  templateUrl: './models.html',
  styleUrl: './models.css',
})
export class Models {
  slides: CarouselItem[] = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&auto=format&fit=crop',
      title: 'Cimas del Silencio',
      subtitle: 'Donde la montaña toca el cielo y el tiempo se detiene.',
      tag: 'Naturaleza',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=900&auto=format&fit=crop',
      title: 'Luces de la Ciudad',
      subtitle: 'Una noche que nunca duerme, un horizonte que siempre promete.',
      tag: 'Urbano',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop',
      title: 'Horizontes de Arena',
      subtitle: 'La playa infinita donde el mar escribe sus propias historias.',
      tag: 'Viajes',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&auto=format&fit=crop',
      title: 'Bosque Eterno',
      subtitle: 'Entre raíces antiguas y luz filtrada, la calma es absoluta.',
      tag: 'Exploración',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=900&auto=format&fit=crop',
      title: 'Desierto Vivo',
      subtitle: 'El calor moldea dunas que cambian con cada soplo de viento.',
      tag: 'Aventura',
    },
  ];
}
