import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-container',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
})
export class ProductCardContainerComponent {
  @Input() name?: string;
  @Input() brand?: string;
  @Input() price?: number;
  @Input() rating?: number;
}
