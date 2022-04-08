import { TestBed } from '@angular/core/testing';

import { SurefarmService } from './surefarm.service';

describe('SurefarmService', () => {
  let service: SurefarmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurefarmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
