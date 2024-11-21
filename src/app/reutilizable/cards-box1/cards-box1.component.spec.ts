import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBox1Component } from './cards-box1.component';

describe('CardsBox1Component', () => {
  let component: CardsBox1Component;
  let fixture: ComponentFixture<CardsBox1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsBox1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
