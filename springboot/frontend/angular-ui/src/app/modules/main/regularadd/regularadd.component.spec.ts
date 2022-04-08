import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularaddComponent } from './regularadd.component';

describe('RegularaddComponent', () => {
  let component: RegularaddComponent;
  let fixture: ComponentFixture<RegularaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
