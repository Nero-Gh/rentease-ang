import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSliderModalComponent } from './form-slider-modal.component';

describe('FormSliderModalComponent', () => {
  let component: FormSliderModalComponent;
  let fixture: ComponentFixture<FormSliderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSliderModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSliderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
