import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInterestComponent } from './card-interest.component';

describe('CardInterestComponent', () => {
  let component: CardInterestComponent;
  let fixture: ComponentFixture<CardInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInterestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
