import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTyperulesComponent } from './invoice-typerules.component';

describe('InvoiceTyperulesComponent', () => {
  let component: InvoiceTyperulesComponent;
  let fixture: ComponentFixture<InvoiceTyperulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceTyperulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceTyperulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
