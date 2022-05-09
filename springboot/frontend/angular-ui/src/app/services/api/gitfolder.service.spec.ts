import { TestBed } from '@angular/core/testing';

import { GitfolderService } from './gitfolder.service';

describe('GitfolderService', () => {
  let service: GitfolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitfolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
