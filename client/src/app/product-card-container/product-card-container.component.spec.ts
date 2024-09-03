import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardContainerComponent } from './product-card-container.component';

describe('ProductCardContainerComponent', () => {
  let component: ProductCardContainerComponent;
  let fixture: ComponentFixture<ProductCardContainerComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ProductCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
