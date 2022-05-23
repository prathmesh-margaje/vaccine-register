import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVaccineRegistrationComponent } from './add-vaccine-registration.component';

describe('AddVaccineRegistrationComponent', () => {
  let component: AddVaccineRegistrationComponent;
  let fixture: ComponentFixture<AddVaccineRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVaccineRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVaccineRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
