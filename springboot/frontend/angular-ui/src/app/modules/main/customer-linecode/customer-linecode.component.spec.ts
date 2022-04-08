import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLinecodeComponent } from './customer-linecode.component';

describe('CustomerLinecodeComponent', () => {
  let component: CustomerLinecodeComponent;
  let fixture: ComponentFixture<CustomerLinecodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerLinecodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLinecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
