import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulareditComponent } from './regularedit.component';

describe('RegulareditComponent', () => {
  let component: RegulareditComponent;
  let fixture: ComponentFixture<RegulareditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulareditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulareditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
