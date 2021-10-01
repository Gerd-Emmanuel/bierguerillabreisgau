import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgbFooterComponent } from './bgb-footer.component';

describe('BgbFooterComponent', () => {
  let component: BgbFooterComponent;
  let fixture: ComponentFixture<BgbFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgbFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgbFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
