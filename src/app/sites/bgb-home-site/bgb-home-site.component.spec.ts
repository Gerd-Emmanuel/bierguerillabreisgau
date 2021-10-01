import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgbHomeSiteComponent } from './bgb-home-site.component';

describe('BgbHomeSiteComponent', () => {
  let component: BgbHomeSiteComponent;
  let fixture: ComponentFixture<BgbHomeSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgbHomeSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgbHomeSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
