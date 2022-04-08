import { TestBed } from '@angular/core/testing';

import { UsergrpmaintainceService } from './usergrpmaintaince.service';

describe('UsergrpmaintainceService', () => {
  let service: UsergrpmaintainceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsergrpmaintainceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
