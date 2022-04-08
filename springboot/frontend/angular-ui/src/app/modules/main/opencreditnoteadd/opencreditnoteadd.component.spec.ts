import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencreditnoteaddComponent } from './opencreditnoteadd.component';

describe('OpencreditnoteaddComponent', () => {
  let component: OpencreditnoteaddComponent;
  let fixture: ComponentFixture<OpencreditnoteaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpencreditnoteaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpencreditnoteaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
