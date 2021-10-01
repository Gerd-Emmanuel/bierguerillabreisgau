import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgbNavigationComponent } from './bgb-navigation.component';

describe('BgbNavigationComponent', () => {
  let component: BgbNavigationComponent;
  let fixture: ComponentFixture<BgbNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgbNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgbNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
