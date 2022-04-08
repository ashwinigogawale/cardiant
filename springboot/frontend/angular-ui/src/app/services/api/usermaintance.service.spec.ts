import { TestBed } from '@angular/core/testing';

import { UsermaintanceService } from './usermaintance.service';

describe('UsermaintanceService', () => {
  let service: UsermaintanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsermaintanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
