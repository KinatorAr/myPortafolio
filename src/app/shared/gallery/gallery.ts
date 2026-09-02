import { Component, input, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GalleryItem {
  imageUrl: string;
  title: string;
  subtitle?: string;
  tags?: string[];
  ctaUrl?: string;
  ctaLabel?: string;
  featured?: boolean;
}

const FILTER_LOADING_MS = 450;

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  items = input<GalleryItem[]>([]);

  activeFilter = signal<string>('Todos');
  isFiltering = signal(false);
  pendingCount = signal(0);

  availableTags = computed(() => {
    const tags = new Set<string>();
    for (const item of this.items()) {
      item.tags?.forEach(tag => tags.add(tag));
    }
    return ['Todos', ...Array.from(tags).sort()];
  });

  filteredItems = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'Todos') return this.items();
    return this.items().filter(item => item.tags?.includes(filter));
  });

  // Array "vacío" del tamaño correcto, solo para iterar en el @for del skeleton
  skeletonArray = computed(() => Array.from({ length: this.pendingCount() }));

  setFilter(tag: string) {
    if (this.isFiltering() || this.activeFilter() === tag) return;

    // Calculamos cuántas tarjetas va a tener el resultado ANTES de aplicar el filtro,
    // así el skeleton muestra el número correcto de placeholders
    const count = tag === 'Todos'
      ? this.items().length
      : this.items().filter(i => i.tags?.includes(tag)).length;

    this.pendingCount.set(count);
    this.isFiltering.set(true);

    setTimeout(() => {
      this.activeFilter.set(tag);
      this.isFiltering.set(false);
    }, FILTER_LOADING_MS);
  }
}
