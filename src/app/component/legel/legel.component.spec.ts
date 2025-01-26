import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegelComponent } from './legel.component';

describe('LegelComponent', () => {
  let component: LegelComponent;
  let fixture: ComponentFixture<LegelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
