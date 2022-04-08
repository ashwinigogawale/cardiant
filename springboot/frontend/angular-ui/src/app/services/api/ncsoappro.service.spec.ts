import { TestBed } from '@angular/core/testing';

import { NcsoapproService } from './ncsoappro.service';

describe('NcsoapproService', () => {
  let service: NcsoapproService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NcsoapproService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
