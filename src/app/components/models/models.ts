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
      imageUrl: '/img/entreRamas.webp',
      title: 'Entre Ramas',
      subtitle: 'Landing Page de restaurante con menú interactivo',
      tag: 'HTML / CSS / JS',
      ctaUrl: 'https://entre-ramas.vercel.app/',
    },
    {
      imageUrl: '/img/sazonMio.webp',
      title: 'Sazón Mío',
      subtitle: 'Landing Page de restaurante con menú interactivo',
      tag: 'HTML / CSS / JS',
      ctaUrl: 'https://sazon-mio.vercel.app/',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop',
      title: 'Horizontes de Arena',
      subtitle: 'E-commerce de viajes con integración de pagos en tiempo real.',
      tag: 'Fullstack',
      ctaUrl: '#',
    }
  ];
}
