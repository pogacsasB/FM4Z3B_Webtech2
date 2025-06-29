import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boatcomp } from './boatcomp';

describe('Boatcomp', () => {
  let component: Boatcomp;
  let fixture: ComponentFixture<Boatcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boatcomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boatcomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
