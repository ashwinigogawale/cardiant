import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencreditnoteeditComponent } from './opencreditnoteedit.component';

describe('OpencreditnoteeditComponent', () => {
  let component: OpencreditnoteeditComponent;
  let fixture: ComponentFixture<OpencreditnoteeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpencreditnoteeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpencreditnoteeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
