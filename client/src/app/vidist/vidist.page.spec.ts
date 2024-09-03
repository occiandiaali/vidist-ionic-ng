import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { VidistPage } from './vidist.page';

describe('VidistPage', () => {
  let component: VidistPage;
  let fixture: ComponentFixture<VidistPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VidistPage],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
