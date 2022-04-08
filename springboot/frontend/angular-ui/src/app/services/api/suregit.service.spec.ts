import { TestBed } from '@angular/core/testing';

import { SuregitService } from './suregit.service';

describe('SuregitService', () => {
  let service: SuregitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuregitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
