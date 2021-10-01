import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgbMembershipComponent } from './bgb-membership.component';

describe('BgbMembershipComponent', () => {
  let component: BgbMembershipComponent;
  let fixture: ComponentFixture<BgbMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgbMembershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgbMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
