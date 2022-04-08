import { TestBed } from '@angular/core/testing';

import { LogconfigService } from './logconfig.service';

describe('LogconfigService', () => {
  let service: LogconfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogconfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
