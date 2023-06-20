import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtysComponent } from './realtys.component';

describe('RealtysComponent', () => {
  let component: RealtysComponent;
  let fixture: ComponentFixture<RealtysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealtysComponent]
    });
    fixture = TestBed.createComponent(RealtysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
