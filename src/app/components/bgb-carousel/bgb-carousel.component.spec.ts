import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgbCarouselComponent } from './bgb-carousel.component';

describe('BgbCarouselComponent', () => {
  let component: BgbCarouselComponent;
  let fixture: ComponentFixture<BgbCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgbCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgbCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
