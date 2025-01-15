import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingWrapperComponent } from './landing-wrapper.component';

describe('LandingWrapperComponent', () => {
  let component: LandingWrapperComponent;
  let fixture: ComponentFixture<LandingWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
