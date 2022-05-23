import { TestBed } from '@angular/core/testing';

import { MemberStatusService } from './member-status.service';

describe('MemberStatusService', () => {
  let service: MemberStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
