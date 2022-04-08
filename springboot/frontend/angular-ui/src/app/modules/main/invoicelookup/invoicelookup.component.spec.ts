import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicelookupComponent } from './invoicelookup.component';

describe('InvoicelookupComponent', () => {
  let component: InvoicelookupComponent;
  let fixture: ComponentFixture<InvoicelookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicelookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicelookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
