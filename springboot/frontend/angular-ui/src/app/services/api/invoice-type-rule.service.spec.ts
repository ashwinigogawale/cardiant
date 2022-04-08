import { TestBed } from '@angular/core/testing';

import { InvoiceTypeRuleService } from './invoice-type-rule.service';

describe('InvoiceTypeRuleService', () => {
  let service: InvoiceTypeRuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceTypeRuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
