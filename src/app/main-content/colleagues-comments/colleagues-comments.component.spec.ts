import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleaguesCommentsComponent } from './colleagues-comments.component';

describe('ColleaguesCommentsComponent', () => {
  let component: ColleaguesCommentsComponent;
  let fixture: ComponentFixture<ColleaguesCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColleaguesCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColleaguesCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
