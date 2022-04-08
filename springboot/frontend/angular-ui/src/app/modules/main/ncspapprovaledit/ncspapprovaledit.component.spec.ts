import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcspapprovaleditComponent } from './ncspapprovaledit.component';

describe('NcspapprovaleditComponent', () => {
  let component: NcspapprovaleditComponent;
  let fixture: ComponentFixture<NcspapprovaleditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcspapprovaleditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcspapprovaleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
