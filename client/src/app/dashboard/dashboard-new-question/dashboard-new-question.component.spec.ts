import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewQuestionComponent } from './dashboard-new-question.component';

describe('DashboardNewQuestionComponent', () => {
  let component: DashboardNewQuestionComponent;
  let fixture: ComponentFixture<DashboardNewQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNewQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
