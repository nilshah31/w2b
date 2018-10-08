import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansAndPriceComponent } from './plans-and-price.component';

describe('PlansAndPriceComponent', () => {
  let component: PlansAndPriceComponent;
  let fixture: ComponentFixture<PlansAndPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansAndPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansAndPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
