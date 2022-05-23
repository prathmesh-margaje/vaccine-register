import { TestBed } from '@angular/core/testing';

import { VaccineRegistrationService } from './vaccine-registration.service';

describe('VaccineRegistrationService', () => {
  let service: VaccineRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccineRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
