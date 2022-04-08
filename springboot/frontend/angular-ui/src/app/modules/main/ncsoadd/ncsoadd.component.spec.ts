import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcsoaddComponent } from './ncsoadd.component';

describe('NcsoaddComponent', () => {
  let component: NcsoaddComponent;
  let fixture: ComponentFixture<NcsoaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcsoaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcsoaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
