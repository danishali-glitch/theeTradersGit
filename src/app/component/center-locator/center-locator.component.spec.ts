import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterLocatorComponent } from './center-locator.component';

describe('CenterLocatorComponent', () => {
  let component: CenterLocatorComponent;
  let fixture: ComponentFixture<CenterLocatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenterLocatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
