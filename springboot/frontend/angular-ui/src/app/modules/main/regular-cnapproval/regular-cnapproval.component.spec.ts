import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularCNApprovalComponent } from './regular-cnapproval.component';

describe('RegularCNApprovalComponent', () => {
  let component: RegularCNApprovalComponent;
  let fixture: ComponentFixture<RegularCNApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularCNApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularCNApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
