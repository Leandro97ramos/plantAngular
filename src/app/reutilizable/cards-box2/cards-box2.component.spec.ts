import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBox2Component } from './cards-box2.component';

describe('CardsBox2Component', () => {
  let component: CardsBox2Component;
  let fixture: ComponentFixture<CardsBox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsBox2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
