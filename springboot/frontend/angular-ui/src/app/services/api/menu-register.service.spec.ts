import { TestBed } from '@angular/core/testing';

import { MenuRegisterService } from './menu-register.service';

describe('MenuRegisterService', () => {
  let service: MenuRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
