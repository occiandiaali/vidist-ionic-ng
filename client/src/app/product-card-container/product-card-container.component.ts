import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-card-container',
  templateUrl: './product-card-container.component.html',
  styleUrls: ['./product-card-container.component.scss'],
  imports: [NgIf],
  standalone: true,
})
export class ProductCardContainerComponent {
  @Input() title?: string;
  @Input() brand?: string;
  @Input() thumbnail?: string;
  @Input() price?: string;
  @Input() rating?: string;
  @Input() category?: string;
}
