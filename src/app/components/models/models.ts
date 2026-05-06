import { Component, ChangeDetectionStrategy} from '@angular/core';
import { Carousel, CarouselItem } from '../../shared/carousel/carousel';

@Component({
  selector: 'app-models',
  imports: [Carousel],
  templateUrl: './models.html',
  styleUrl: './models.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Models {
  slides: CarouselItem[] = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&auto=format&fit=crop',
      title: 'Cimas del Silencio',
      subtitle: 'Una plataforma web diseñada para amantes del senderismo con Angular.',
      tag: 'Angular / Web',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=900&auto=format&fit=crop',
      title: 'Luces de la Ciudad',
      subtitle: 'Dashboard administrativo para gestión de tráfico urbano inteligente.',
      tag: 'React / UI',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop',
      title: 'Horizontes de Arena',
      subtitle: 'E-commerce de viajes con integración de pagos en tiempo real.',
      tag: 'Fullstack',
    }
  ];
}
