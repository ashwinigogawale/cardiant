import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularCreditNoteComponent } from './regular-credit-note.component';

describe('RegularCreditNoteComponent', () => {
  let component: RegularCreditNoteComponent;
  let fixture: ComponentFixture<RegularCreditNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularCreditNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularCreditNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
