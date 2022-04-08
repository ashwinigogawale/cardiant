import { TestBed } from '@angular/core/testing';

import { WireframeLineService } from './wireframe-line.service';

describe('WireframeLineService', () => {
  let service: WireframeLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WireframeLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
