import { TestBed } from '@angular/core/testing';

import { GitfileService } from './gitfile.service';

describe('GitfileService', () => {
  let service: GitfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
