import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boatform } from './boatform';

describe('Boatform', () => {
  let component: Boatform;
  let fixture: ComponentFixture<Boatform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boatform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boatform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
