import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcspapprovalreadComponent } from './ncspapprovalread.component';

describe('NcspapprovalreadComponent', () => {
  let component: NcspapprovalreadComponent;
  let fixture: ComponentFixture<NcspapprovalreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcspapprovalreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcspapprovalreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
