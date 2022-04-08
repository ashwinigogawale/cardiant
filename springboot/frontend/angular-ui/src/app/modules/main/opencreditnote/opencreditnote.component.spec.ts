import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencreditnoteComponent } from './opencreditnote.component';

describe('OpencreditnoteComponent', () => {
  let component: OpencreditnoteComponent;
  let fixture: ComponentFixture<OpencreditnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpencreditnoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpencreditnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
