import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLayerComponent } from './products-layer.component';

describe('ProductsLayerComponent', () => {
  let component: ProductsLayerComponent;
  let fixture: ComponentFixture<ProductsLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
