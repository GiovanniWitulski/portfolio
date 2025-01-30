import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveTheFoldMobileComponent } from './above-the-fold-mobile.component';

describe('AboveTheFoldMobileComponent', () => {
  let component: AboveTheFoldMobileComponent;
  let fixture: ComponentFixture<AboveTheFoldMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboveTheFoldMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboveTheFoldMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
