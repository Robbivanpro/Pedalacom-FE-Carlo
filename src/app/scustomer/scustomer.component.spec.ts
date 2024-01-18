import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScustomerComponent } from './scustomer.component';

describe('ScustomerComponent', () => {
  let component: ScustomerComponent;
  let fixture: ComponentFixture<ScustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
