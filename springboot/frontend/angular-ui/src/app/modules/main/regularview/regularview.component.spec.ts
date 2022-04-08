import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularviewComponent } from './regularview.component';

describe('RegularviewComponent', () => {
  let component: RegularviewComponent;
  let fixture: ComponentFixture<RegularviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
