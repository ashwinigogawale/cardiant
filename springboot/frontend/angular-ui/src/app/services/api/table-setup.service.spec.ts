import { TestBed } from '@angular/core/testing';

import { TableSetupService } from './table-setup.service';

describe('TableSetupService', () => {
  let service: TableSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
