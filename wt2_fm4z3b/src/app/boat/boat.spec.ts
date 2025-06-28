import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boat } from './boat';

describe('Boat', () => {
  let component: Boat;
  let fixture: ComponentFixture<Boat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
