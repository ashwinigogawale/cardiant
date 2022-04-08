import { TestBed } from '@angular/core/testing';

import { SuredokrService } from './suredokr.service';

describe('SuredokrService', () => {
  let service: SuredokrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuredokrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
