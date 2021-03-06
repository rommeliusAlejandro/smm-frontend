import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MonthlyProgramsComponent } from './monthly-programs.component';

describe('MonthlyProgramsComponent', () => {
  let component: MonthlyProgramsComponent;
  let fixture: ComponentFixture<MonthlyProgramsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
