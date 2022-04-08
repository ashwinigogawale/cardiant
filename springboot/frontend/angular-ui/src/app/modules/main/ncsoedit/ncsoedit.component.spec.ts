import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcsoeditComponent } from './ncsoedit.component';

describe('NcsoeditComponent', () => {
  let component: NcsoeditComponent;
  let fixture: ComponentFixture<NcsoeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcsoeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcsoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
