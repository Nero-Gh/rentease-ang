import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPropertiesComponent } from './product-properties.component';

describe('ProductPropertiesComponent', () => {
  let component: ProductPropertiesComponent;
  let fixture: ComponentFixture<ProductPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPropertiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
