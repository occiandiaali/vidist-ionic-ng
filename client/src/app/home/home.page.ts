import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ListingService } from '../services/listing.service';
import { map, Observable } from 'rxjs';
import { Product } from '../services/interfaces';
import { ProductCardContainerComponent } from '../product-card-container/product-card-container.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [AsyncPipe, CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, ProductCardContainerComponent, ExploreContainerComponent],
})
export class HomePage implements OnInit {
  #listingService = inject(ListingService);
  beauty$!: Observable<Product[]>;
  furniture$!: Observable<Product[]>;
  groceries$!: Observable<Product[]>;

  constructor() {}

  ngOnInit(): void {
      // this.beauty$ = this.#listingService.getAll().pipe(
      //   map((response: {products: Product[]}) => {
      //     return response.products?.filter((listing: Product) => listing.category === "beauty")
      //   })
      // );
      // this.furniture$ = this.#listingService.getAll().pipe(
      //   map((response: {products: Product[]}) => {
      //     return response.products?.filter((listing: Product) => listing.category === "furniture")
      //   })
      // );
      this.getAllBeauty();
      this.getAllFurniture();
      this.getAllGroceries();

      
  }

  getAllBeauty() {
          this.beauty$ = this.#listingService.getAll().pipe(
        map((response: {products: Product[]}) => {
          return response.products?.filter((listing: Product) => listing.category === "beauty")
        })
      );
  }

  getAllFurniture() {
         this.furniture$ = this.#listingService.getAll().pipe(
        map((response: {products: Product[]}) => {
          return response.products?.filter((listing: Product) => listing.category === "furniture")
        })
      );
  }

  getAllGroceries() {
    this.groceries$ = this.#listingService.getAll().pipe(
        map((response: {products: Product[]}) => {
          return response.products?.filter((listing: Product) => listing.category === "groceries")
        })
      );
  }
}
